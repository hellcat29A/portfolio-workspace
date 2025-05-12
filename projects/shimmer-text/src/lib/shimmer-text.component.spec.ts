import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShimmerTextComponent } from './shimmer-text.component';

describe('ShimmerTextComponent', () => {
  let component: ShimmerTextComponent;
  let fixture: ComponentFixture<ShimmerTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShimmerTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShimmerTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
