import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceSidenavComponent } from './attendance-sidenav.component';

describe('AttendanceSidenavComponent', () => {
  let component: AttendanceSidenavComponent;
  let fixture: ComponentFixture<AttendanceSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
