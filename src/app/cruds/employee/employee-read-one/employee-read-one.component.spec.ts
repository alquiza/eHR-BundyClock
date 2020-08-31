import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReadOneComponent } from './employee-read-one.component';

describe('EmployeeReadOneComponent', () => {
  let component: EmployeeReadOneComponent;
  let fixture: ComponentFixture<EmployeeReadOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReadOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReadOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
