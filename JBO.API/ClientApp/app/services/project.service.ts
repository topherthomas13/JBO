import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

import { ApiPathsInjectable } from "../apiPathsInjectable";

import { Project } from "../models/project";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': "application/json" })
};

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient, private projectApi: ApiPathsInjectable) { }

  // path to the api
  private api = this.projectApi.projectApi;

  // get
  getProjects(): Observable<Project[]> {
    return this.http
      .get<Project[]>(this.api);
  }

  // get
  getProject(id: number): Observable<Project> {
    return this.http
      .get<Project>(this.api + "/${id}");
  }

  // post
  addProject(project: Project): Observable<Project> {
    return this.http
      .post<Project>(this.api, project, httpOptions);
  }

  // put
  updateProject(project: Project): Observable<any> {
    return this.http
      .put(`${this.api}/${project.Id}`, project, httpOptions);
  }

  // put
  updateProjectStatus(id: number, status: boolean) {
    return this.http
      .put(`${this.api}/${id}/${status}`, null, httpOptions);
  }

  // delete
  deleteProject(project: Project): Observable<Project> {
    return this.http
      .delete<Project>(`${this.api}/${project.Id}`, httpOptions);
  }

}
