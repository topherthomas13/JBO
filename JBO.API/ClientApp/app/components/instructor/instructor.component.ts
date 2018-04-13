import { Component, OnInit } from "@angular/core";
import { InstructorService } from "../../services/instructor.service";
import { Instructor } from "../../models/instructor";

@Component({
    selector: "app-instructor",
    templateUrl: "./instructor.component.html",
    styleUrls: ["./instructor.component.css"]
})
export class InstructorComponent implements OnInit {

    private instructors: Instructor[];
    public updating = false;
    public newInstructor = "";
    public selectedInstructorId = 0;

    constructor(private instructorService: InstructorService) { }

    ngOnInit() {
        this.getInstructors();
    }

    // get all the current instructors from the database
    getInstructors() {
        this.instructorService.getInstructors()
            .subscribe(instructors => {
                this.instructors = instructors;
                console.log(this.instructors);
            });
    }

    // add new instructor
    addInstructor() {
        if (this.newInstructor !== "") {
            this.instructorService.addInstructor({ FullName: this.newInstructor } as Instructor)
                .subscribe(() => {
                    this.newInstructor = "";
                    this.getInstructors();
                });
        }
    }

    // delete an instructor
    deleteInstructor(instructor: Instructor): void {
        this.instructorService.deleteInstructor(instructor)
            .subscribe(() => this.getInstructors());
    }

    // save updated instructor
    saveInstructor(instructor: Instructor, newName: string) {
        instructor.FullName = newName;
        this.instructorService.updateInstructor(instructor)
            .subscribe(() => {
                this.getInstructors();
                this.updating = false;
                this.selectedInstructorId = -1;
            });
    }

    // change active status of instructor
    updateInstructorStatus(id: number, status: boolean) {
        this.instructorService.updateInstructorStatus(id, status)
            .subscribe(() => {
                this.getInstructors();
            });
    }

    // toggle the update controls
    updateInstructor(id: number) {
        this.selectedInstructorId = id;
        this.updating = true;
    }
}
