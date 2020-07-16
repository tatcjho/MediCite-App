import { TestBed } from '@angular/core/testing';

import { MediciteService } from './medicite.service';

describe('MediciteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediciteService = TestBed.get(MediciteService);
    expect(service).toBeTruthy();
  });
});
