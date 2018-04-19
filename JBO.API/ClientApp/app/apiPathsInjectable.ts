import { Injectable, Inject } from "@angular/core";
import { InstructorApiPathName, ProjectApiPathName } from "./config";

@Injectable()
export class ApiPathsInjectable {
  constructor( @Inject(InstructorApiPathName) public instructorApi: string,
    @Inject(ProjectApiPathName) public projectApi: string) { }
}