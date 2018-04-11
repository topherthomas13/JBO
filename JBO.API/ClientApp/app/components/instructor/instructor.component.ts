import { Component, OnInit } from "@angular/core";
import { InstructorService } from "../../services/instructor.service";
import { Instructor } from "../../models/instructor";

@Component({
    selector: "app-instructor",
    templateUrl: "./instructor.component.html",
    styleUrls: ["./instructor.component.css"]
})
export class InstructorComponent implements OnInit {

    instructors: Instructor[];
    instructor: Instructor;

    constructor(private instructorService: InstructorService) { }

    ngOnInit() {
        this.getInstructors();
    }

    // get all the current instructors from the database
    getInstructors() {
        this.instructorService.getInstructors()
            .subscribe(instructors => this.instructors = instructors);
    }

    // add new instructor
    addInstructor(newInstructor: string) {
        //this.instructor.fullName = newInstructor;

        console.log(newInstructor);
        //this.instructorService.addInstructor(this.instructor)
        //    .subscribe(res => this.getInstructors());
    }
}
