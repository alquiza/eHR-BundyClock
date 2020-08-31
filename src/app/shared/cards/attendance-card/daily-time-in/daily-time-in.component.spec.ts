import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTimeInComponent } from './daily-time-in.component';

describe('DailyTimeInComponent', () => {
  let component: DailyTimeInComponent;
  let fixture: ComponentFixture<DailyTimeInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTimeInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTimeInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
