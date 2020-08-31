import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceReadAllComponent } from './attendance-read-all.component';

describe('AttendanceReadAllComponent', () => {
  let component: AttendanceReadAllComponent;
  let fixture: ComponentFixture<AttendanceReadAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceReadAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceReadAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
