import { TestBed, inject } from '@angular/core/testing';

import { FormanswerService } from './formanswer.service';

describe('FormanswerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormanswerService]
    });
  });

  it('should be created', inject([FormanswerService], (service: FormanswerService) => {
    expect(service).toBeTruthy();
  }));
});
