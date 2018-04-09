import { Component, OnInit } from "@angular/core";
import { InstructorService } from "../../services/instructor.service";
import { Instructor } from "../../models/instructor";

@Component({
    selector: "app-instructor",
    templateUrl: "./instructor.component.html",
    styleUrls: ["./instructor.component.css"]
})
export class InstructorComponent implements OnInit {

    constructor(instructorService: InstructorService) { }

    private instructorApi = "/instructor";

    ngOnInit() {
    }


}
