import { TestBed } from '@angular/core/testing';

import { LocalArticleService } from './local-article.service';

describe('LocalArticleService', () => {
  let service: LocalArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
