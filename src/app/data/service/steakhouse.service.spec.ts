import { TestBed } from '@angular/core/testing';

import { SteakhouseService } from './steakhouse.service';

describe('SteakhouseService', () => {
  let service: SteakhouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SteakhouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
