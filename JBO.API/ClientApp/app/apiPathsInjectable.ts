import { Injectable, Inject } from "@angular/core";
import { InstructorApiPathName } from "./config";

@Injectable()
export class ApiPathsInjectable {
  constructor(@Inject(InstructorApiPathName) public instructorApi: string) { }
}