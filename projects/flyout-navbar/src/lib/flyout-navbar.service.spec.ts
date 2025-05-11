import { TestBed } from '@angular/core/testing';

import { FlyoutNavbarService } from './flyout-navbar.service';

describe('FlyoutNavbarService', () => {
  let service: FlyoutNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlyoutNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
