import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../services/project.service";
import { Project } from "../../models/project";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  private projects: Project[];
  public updating = false;
  public newProject = "";
  public selectedProjectId = 0;


  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  // get all the current projects from the database
  getProjects() {
    this.projectService.getProjects()
      .subscribe(projects => {
        this.projects = projects;
        console.log(this.projects);
      });
  }

  // add new project
  addProject() {
    if (this.newProject !== "") {
      this.projectService.addProject({ ProjectName: this.newProject } as Project)
        .subscribe(() => {
          this.newProject = "";
          this.getProjects();
        });
    }
  }

  // delete an project
  deleteProject(project: Project): void {
    this.projectService.deleteProject(project)
      .subscribe(() => this.getProjects());
  }

  // save updated project
  saveProject(project: Project, newName: string) {
    project.ProjectName = newName;
    this.projectService.updateProject(project)
      .subscribe(() => {
        this.getProjects();
        this.updating = false;
        this.selectedProjectId = -1;
      });
  }

  // change active status of project
  updateProjectStatus(id: number, status: boolean) {
    this.projectService.updateProjectStatus(id, status)
      .subscribe(() => {
        this.getProjects();
      });
  }

  // toggle the update controls
  updateProject(id: number) {
    this.selectedProjectId = id;
    this.updating = true;
  }
}
