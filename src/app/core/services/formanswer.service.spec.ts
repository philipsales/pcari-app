import { TestBed, inject } from '@angular/core/testing';

import { FormAnswerService } from './formanswer.service';

describe('FormanswerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormAnswerService]
    });
  });

  it('should be created', inject([FormAnswerService], (service: FormAnswerService) => {
    expect(service).toBeTruthy();
  }));
});
