import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceDefaultComponent } from './attendance-default.component';

describe('AttendanceDefaultComponent', () => {
  let component: AttendanceDefaultComponent;
  let fixture: ComponentFixture<AttendanceDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
