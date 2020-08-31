import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/shared/classes/employee/employee';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-read-all',
  templateUrl: './employee-read-all.component.html',
  styleUrls: ['./employee-read-all.component.scss']
})

export class EmployeeReadAllComponent implements OnInit {

  appTitle = 'Employee Manifest & Management';
  appSubtitle = 'Basic Employees Information';
  tableHeads = [
    { name: 'Employee Identity', },
    { name: 'Surname', },
    { name: 'First Name', },
    { name: 'Actions'},
  ];

  actionButton00 = 'Details';
  actionButton01 = 'Delete';

  employees: Observable<Employee[]>;
  employee: Employee = new Employee();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  private updateSubscription: Subscription;

  constructor(
    public employeeApi: EmployeeService,
    public router: Router,
  ) { }
  dataSource = new MatTableDataSource<any>();

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.updateSubscription = interval(3000).subscribe(
      (valIn) => { this.listAllEmployees(); },
    );
  }

  listAllEmployees() {
    this.employeeApi.readAllEmployee()
      .subscribe(
        employeeData => { this.employees = employeeData; },
        error => { console.log(error); },
      );
  }

  employeeDetail(employee_id: string) {
    this.router.navigate(['admin/employee/', employee_id]);
  }

  deleteThisEmployee(employee_id: string) {
    this.employeeApi.deleteEmployee(employee_id)
      .subscribe(
        employeeData => { console.log(employeeData); },
        error => { console.log(error); },

      );

  }

}
