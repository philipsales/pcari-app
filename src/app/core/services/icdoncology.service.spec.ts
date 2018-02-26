import { TestBed, inject } from '@angular/core/testing';

import { IcdoncologyService } from './icdoncology.service';

describe('IcdoncologyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IcdoncologyService]
    });
  });

  it('should be created', inject([IcdoncologyService], (service: IcdoncologyService) => {
    expect(service).toBeTruthy();
  }));
});
