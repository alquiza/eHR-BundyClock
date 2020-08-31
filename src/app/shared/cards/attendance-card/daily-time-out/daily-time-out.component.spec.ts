import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTimeOutComponent } from './daily-time-out.component';

describe('DailyTimeOutComponent', () => {
  let component: DailyTimeOutComponent;
  let fixture: ComponentFixture<DailyTimeOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTimeOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTimeOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
