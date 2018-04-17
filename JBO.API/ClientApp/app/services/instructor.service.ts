import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

import { ApiPathsInjectable } from "../apiPathsInjectable";

import { Instructor } from "../models/instructor";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': "application/json" })
};

@Injectable()
export class InstructorService {

    constructor(private http: HttpClient, private instructorApi: ApiPathsInjectable) { }

    // path to the api
    //private instructorApi = "api/Instructor";

    // get
    getInstructors(): Observable<Instructor[]> {
        return this.http
            .get<Instructor[]>(this.instructorApi.instructorApi);
    }

    // get
    getInstructor(id: number): Observable<Instructor> {
        return this.http
            .get<Instructor>(this.instructorApi.instructorApi + "/${id}");
    }

    // post
    addInstructor(instructor: Instructor): Observable<Instructor> {
        return this.http
            .post<Instructor>(this.instructorApi.instructorApi, instructor, httpOptions);
    }

    // put
    updateInstructor(instructor: Instructor): Observable<any> {
        return this.http
            .put(`${this.instructorApi.instructorApi}/${instructor.Id}`, instructor, httpOptions);
    }

    // put
    updateInstructorStatus(id: number, status: boolean) {
        return this.http
            .put(`${this.instructorApi.instructorApi}/${id}/${status}`, null, httpOptions);
    }

    // delete
    deleteInstructor(instructor: Instructor): Observable<Instructor> {
        return this.http
            .delete<Instructor>(`${this.instructorApi.instructorApi}/${instructor.Id}`, httpOptions);
    }
}
