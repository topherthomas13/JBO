import { TestBed, inject } from '@angular/core/testing';
import { } from 'jasmine';

import { InstructorService } from './instructor.service';

describe('InstructorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [InstructorService]
    });
  });

    it('should be created', inject([InstructorService], (service: InstructorService) => {
    expect(service).toBeTruthy();
  }));
});
