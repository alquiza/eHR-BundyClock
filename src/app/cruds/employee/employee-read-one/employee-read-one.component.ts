import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/shared/classes/employee/employee';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-read-one',
  templateUrl: './employee-read-one.component.html',
  styleUrls: ['./employee-read-one.component.scss']
})

export class EmployeeReadOneComponent implements OnInit {

  employees: Observable<Employee[]>;
  employee: Employee = new Employee();
  employee_id: string;

  employeeTitle = 'Employees';
  employeeSubtitle = 'Employee Information';
  items000 = 'Employee Identity:';
  items001 = 'Surname:';
  items002 = 'First name:';
  items003 = 'Middle name:';
  items004 = 'Gender';
  items005 = 'Birthday';
  actionButton00 = 'Employees';
  actionButton01 = 'Update';
  actionButton02 = 'Contacts';
  actionButton03 = 'Records';

  constructor(
    public employeeApi: EmployeeService,
    public route: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit() {
    this.employee = new Employee();
    this.employee_id = this.route.snapshot.params['employee_id'];
    this.employeeApi.readOneEmployee(this.employee_id)
      .subscribe(
        employeeData => { console.log(employeeData); this.employee = employeeData; },
        error => { console.log(error); },
      )
  }

  updateProfile() {
    this.employeeApi.updateEmployee(this.employee_id, this.employee)
      .subscribe(
        profileData => { console.log(profileData); },
        error => { console.log(error); },
      );
  }



}
