import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReadAllComponent } from './employee-read-all.component';

describe('EmployeeReadAllComponent', () => {
  let component: EmployeeReadAllComponent;
  let fixture: ComponentFixture<EmployeeReadAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReadAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReadAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
