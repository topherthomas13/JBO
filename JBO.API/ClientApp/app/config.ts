import { InjectionToken } from "@angular/core";
import { environment } from "../environments/environment";
export const InstructorApiPathName = new InjectionToken<string>("instructor-api");
export const InstructorApiPath = { provide: InstructorApiPathName, useValue: environment.instructorApi };
