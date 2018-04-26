import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../services/project.service';
import { DataCacheService } from '../../services/data-cache.service';

import { Project } from '../../models/project';
import { CacheObject } from '../../models/cacheObject';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public updating = false;
  public newProject = "";
  public selectedProjectId = 0;
  public cachedProjects = new CacheObject();
  private cacheName = 'Projects';

  constructor(private projectService: ProjectService, private dataCacheService: DataCacheService) { }

  ngOnInit() {
    this.cachedProjects = this.dataCacheService.get(this.cacheName);
    this.getProjects();
  }

  // get all the current projects from the database
  getProjects() {
    // check if cached
    if (this.cachedProjects.IsDirty) {
      this.projectService.getProjects()
        .subscribe(projects => {
          this.cachedProjects = this.dataCacheService.add(this.cacheName, projects);
        });
    } 
  }

  // add new project
  addProject() {
    if (this.newProject !== "") {
      this.projectService.addProject({ ProjectName: this.newProject } as Project)
        .subscribe(() => {
          this.newProject = "";
          this.dataCacheService.markDirty(this.cacheName);
          this.getProjects();
        });
    }
  }

  // delete an project
  deleteProject(project: Project): void {
    this.projectService.deleteProject(project)
      .subscribe(() => {
        this.dataCacheService.markDirty(this.cacheName);
        this.getProjects();
      });
  }

  // save updated project
  saveProject(project: Project, newName: string, newDescription: string) {
    project.ProjectName = (newName === project.ProjectName || newName === '') ? project.ProjectName : newName;
    project.ProjectDescription = (newDescription === project.ProjectDescription || newDescription === '') ? project.ProjectDescription : newDescription;
    this.projectService.updateProject(project)
      .subscribe(() => {
        this.dataCacheService.markDirty(this.cacheName);
        this.getProjects();
        this.updating = false;
        this.selectedProjectId = -1;
      });
  }

  // change active status of project
  updateProjectStatus(id: number, status: boolean) {
    this.projectService.updateProjectStatus(id, status)
      .subscribe(() => {
        this.dataCacheService.markDirty(this.cacheName);
        this.getProjects();
      });
  }

  // toggle the update controls
  updateProject(id: number) {
    this.selectedProjectId = id;
    this.updating = true;
  }
}
