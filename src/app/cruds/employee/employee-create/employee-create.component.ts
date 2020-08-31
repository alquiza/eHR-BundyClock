import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/shared/classes/employee/employee';
import { Identity } from 'src/app/shared/classes/identity/identity';
import { stringify } from '@angular/compiler/src/util';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { IdentityService } from 'src/app/shared/services/identity/identity.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})

export class EmployeeCreateComponent implements OnInit {

  addEmployeeAppTitle = 'Integrated Human Resources System';
  addEmployeeAppSubTitle = 'Human Resources Employee Basic Info';
  addButtonName = 'Add/Submit';

  tableHeads = [
    { name: 'Employee Identity', },
    { name: 'Surname', },
    { name: 'First Name', },
    { name: 'Middle Name', },
    { name: 'Gender', },
    { name: 'Birthday', },
    { name: 'Add/Submit'},
  ];

  items000 = 'Employee ID#, Fingerprint, RFID#:';
  items001 = 'Surname:';
  items002 = 'First Name:';
  items003 = 'Middle Name:';
  items004 = 'Gender';
  items005 = 'Birthday';
  items006 = 'Photo';


  employees: Observable<Employee[]>;
  identities: Observable<Identity[]>;
  employee: Employee = new Employee();
  identity: Identity = new Identity();
  createEmployees: any;
  employee_id: string;

  employeeIdControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);

  constructor(
    private employeeApi: EmployeeService,
    private identityApi: IdentityService,
    private route: ActivatedRoute,
  ) {
    this.createEmployees = {
      last_name: '',
      first_name: '',
      middle_name: '',
      gender: '',
      birthday: new Date(),
      photo: '',
    }
  }

  ngOnInit() { this.employee = new Employee(); this.idenityList();
  }

  addEmployee() {
    this.employeeApi.createEmployee(this.employee)
      .subscribe(
        employeeData => { this.employees = employeeData; },
        error => { console.log(error); },
      );
  }

  employeeNewAdd() {
    this.employee_id = this.route.snapshot.params['employee_id'];
    this.employeeApi.updateEmployee(this.employee_id, this.employee)
      .subscribe(
        employeeData => { this.employee = employeeData; },
        error => { console.log(); },
      );
    this.employee = new Employee();
  }

  idenityList() {
    this.identityApi.readAllIdentities()
      .subscribe(
        identityData => { this.identities = identityData; },
        error => { console.log(error)}
      );
  }


}
