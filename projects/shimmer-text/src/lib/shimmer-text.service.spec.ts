import { TestBed } from '@angular/core/testing';

import { ShimmerTextService } from './shimmer-text.service';

describe('ShimmerTextService', () => {
  let service: ShimmerTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShimmerTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
