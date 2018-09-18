import { TestBed } from '@angular/core/testing';

import { StwService } from './stw-service.service';

describe('StwService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StwService = TestBed.get(StwService);
    expect(service).toBeTruthy();
  });
});
