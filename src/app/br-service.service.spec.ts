import { TestBed } from '@angular/core/testing';

import { BrService } from './br-service.service';

describe('BrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrService = TestBed.get(BrService);
    expect(service).toBeTruthy();
  });
});
