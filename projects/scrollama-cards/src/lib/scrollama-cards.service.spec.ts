import { TestBed } from '@angular/core/testing';

import { ScrollamaCardsService } from './scrollama-cards.service';

describe('ScrollamaCardsService', () => {
  let service: ScrollamaCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollamaCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
