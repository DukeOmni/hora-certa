import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeClockComponent } from './time-clock.component';

describe('TimeClockComponent', () => {
  let component: TimeClockComponent;
  let fixture: ComponentFixture<TimeClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
