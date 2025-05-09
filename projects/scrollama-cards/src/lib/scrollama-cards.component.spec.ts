import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollamaCardsComponent } from './scrollama-cards.component';

describe('ScrollamaCardsComponent', () => {
  let component: ScrollamaCardsComponent;
  let fixture: ComponentFixture<ScrollamaCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollamaCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollamaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
