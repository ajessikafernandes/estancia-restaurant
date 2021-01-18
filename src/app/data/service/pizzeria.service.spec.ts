import { TestBed } from '@angular/core/testing';

import { PizzeriaService } from './pizzeria.service';

describe('PizzeriaService', () => {
  let service: PizzeriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzeriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
