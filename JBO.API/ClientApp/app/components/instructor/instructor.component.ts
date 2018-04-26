import { Component, OnInit } from '@angular/core';

import { InstructorService } from '../../services/instructor.service';
import { DataCacheService } from '../../services/data-cache.service';

import { Instructor } from '../../models/instructor';
import { CacheObject } from '../../models/cacheObject';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  public updating = false;
  public newInstructor = '';
  public selectedInstructorId = 0;
  public cachedInstructors = new CacheObject();

  constructor(private instructorService: InstructorService, private dataCacheService: DataCacheService) { }

  ngOnInit() {
    this.cachedInstructors = this.dataCacheService.get('Instructors');
    this.getInstructors();
  }

  // get all the current instructors from the database
  getInstructors() {
    // check if cached
    if (this.cachedInstructors.IsDirty) {
      this.instructorService.getInstructors()
        .subscribe(instructors => {
          this.cachedInstructors = this.dataCacheService.add('Instructors', instructors);
        });
    }
  }

  // add new instructor
  addInstructor() {
    if (this.newInstructor !== "") {
      this.instructorService.addInstructor({ FullName: this.newInstructor } as Instructor)
        .subscribe(() => {
          this.newInstructor = "";
          this.dataCacheService.markDirty('Instructors');
          this.getInstructors();
        });
    }
  }

  // delete an instructor
  deleteInstructor(instructor: Instructor): void {
    this.instructorService.deleteInstructor(instructor)
      .subscribe(() => {
        this.dataCacheService.markDirty('Instructors');
        this.getInstructors();
      });
  }

  // save updated instructor
  saveInstructor(instructor: Instructor, newName: string) {
    instructor.FullName = newName;
    this.instructorService.updateInstructor(instructor)
      .subscribe(() => {
        this.dataCacheService.markDirty('Instructors');
        this.getInstructors();
        this.updating = false;
        this.selectedInstructorId = -1;
      });
  }

  // change active status of instructor
  updateInstructorStatus(id: number, status: boolean) {
    this.instructorService.updateInstructorStatus(id, status)
      .subscribe(() => {
        this.dataCacheService.markDirty('Instructors');
        this.getInstructors();
      });
  }

  // toggle the update controls
  updateInstructor(id: number) {
    this.selectedInstructorId = id;
    this.updating = true;
  }
}
