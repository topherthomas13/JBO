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
    private api = this.instructorApi.instructorApi;

    // get
    getInstructors(): Observable<Instructor[]> {
        return this.http
          .get<Instructor[]>(this.api);
    }

    // get
    getInstructor(id: number): Observable<Instructor> {
        return this.http
          .get<Instructor>(this.api + "/${id}");
    }

    // post
    addInstructor(instructor: Instructor): Observable<Instructor> {
        return this.http
          .post<Instructor>(this.api, instructor, httpOptions);
    }

    // put
    updateInstructor(instructor: Instructor): Observable<any> {
        return this.http
          .put(`${this.api}/${instructor.Id}`, instructor, httpOptions);
    }

    // put
    updateInstructorStatus(id: number, status: boolean) {
        return this.http
          .put(`${this.api}/${id}/${status}`, null, httpOptions);
    }

    // delete
    deleteInstructor(instructor: Instructor): Observable<Instructor> {
        return this.http
          .delete<Instructor>(`${this.api}/${instructor.Id}`, httpOptions);
    }
}
