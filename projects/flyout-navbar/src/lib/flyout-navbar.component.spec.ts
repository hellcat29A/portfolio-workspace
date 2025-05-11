import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyoutNavbarComponent } from './flyout-navbar.component';

describe('FlyoutNavbarComponent', () => {
  let component: FlyoutNavbarComponent;
  let fixture: ComponentFixture<FlyoutNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlyoutNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlyoutNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
