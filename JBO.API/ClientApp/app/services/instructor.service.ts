import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

import { Instructor } from "../models/instructor";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class InstructorService {

    constructor(private http: HttpClient) { }

    // path to the api
    private instructorApi = "api/Instructor";

    // get
    getInstructors(): Observable<Instructor[]> {
        return this.http.get<Instructor[]>(this.instructorApi)
    }

    // get
    getInstructor(id: number): Observable<Instructor> {
        return this.http.get<Instructor>(this.instructorApi + "/${id}");
    }

    // post
    addInstructor(instructor: Instructor): Observable<Instructor> {
        return this.http.post<Instructor>(this.instructorApi, instructor, httpOptions);
    }

    // put
    updateInstructor(instructor: Instructor): Observable<any> {
        return this.http.put(this.instructorApi, instructor, httpOptions);
    }

    // delete
    deleteInstructor(id: number): Observable<Instructor> {
        return this.http.delete<Instructor>(this.instructorApi + "/${id}", httpOptions);
    }
}
