import { TestBed } from '@angular/core/testing';

import { LocalUserService } from './local-user.service';

describe('LocalUserService', () => {
  let service: LocalUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
