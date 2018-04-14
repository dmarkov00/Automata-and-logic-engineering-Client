import { TestBed, inject } from '@angular/core/testing';

import { AssignmentResultService } from './assignment-result.service';

describe('AssignmentOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssignmentResultService]
    });
  });

  it('should be created', inject([AssignmentResultService], (service: AssignmentResultService) => {
    expect(service).toBeTruthy();
  }));
});
