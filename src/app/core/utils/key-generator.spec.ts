import { TestBed, inject } from '@angular/core/testing';

import { KeyGenerator } from './keygenerator.';

describe('KeyGenerator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeyGenerator]
    });
  });

  it('should be created', inject([KeyGenerator], (service: KeyGenerator) => {
    expect(service).toBeTruthy();
  }));
});
