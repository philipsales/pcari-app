import { TestBed, inject } from '@angular/core/testing';

import { KeyGeneratorService } from './keygenerator.service';

describe('KeyGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeyGeneratorService]
    });
  });

  it('should be created', inject([KeyGeneratorService], (service: KeyGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
