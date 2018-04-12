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
      });
  }

  // toggle the update controls
  updateInstructor() {
    this.updating = true;
  }
}
