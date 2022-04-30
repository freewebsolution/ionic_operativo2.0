import { TestBed } from '@angular/core/testing';

import { InsalatonaService } from './insalatona.service';

describe('InsalatonasericeService', () => {
  let service: InsalatonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsalatonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
