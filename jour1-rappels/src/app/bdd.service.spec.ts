import { TestBed } from '@angular/core/testing';

import { BddService } from './bdd.service';

describe('BddService', () => {
  let service: BddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
