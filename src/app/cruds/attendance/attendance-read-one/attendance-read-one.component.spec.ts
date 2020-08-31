import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceReadOneComponent } from './attendance-read-one.component';

describe('AttendanceReadOneComponent', () => {
  let component: AttendanceReadOneComponent;
  let fixture: ComponentFixture<AttendanceReadOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceReadOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceReadOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
