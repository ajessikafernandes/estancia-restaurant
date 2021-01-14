import { TestBed } from '@angular/core/testing';

import { DepositionService } from 'deposition.service';

describe('DepositionService', () => {
  let service: DepositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
