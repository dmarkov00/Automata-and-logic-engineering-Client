import { TestBed, inject } from '@angular/core/testing';

import { AssignmentOneService } from './assignment-one.service';

describe('AssignmentOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssignmentOneService]
    });
  });

  it('should be created', inject([AssignmentOneService], (service: AssignmentOneService) => {
    expect(service).toBeTruthy();
  }));
});
