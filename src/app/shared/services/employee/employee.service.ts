import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeesApi = 'http://127.0.0.1:8000/api/basics/';
  httpHeader = new HttpHeaders(
    { 'Content-Type': 'application/json' },
  );

  constructor(
    public http: HttpClient,
  ) { }

  // Employees Basic INFO CRRUD

  // CREATE EMPLOYEE Basic Info

  createEmployee(employeeData: any): Observable<any> {
    return this.http.post(
      `${this.employeesApi}`, employeeData,
      { headers: this.httpHeader },
    );
  }

  // READ ALL EMPLOYEE Basic Info

  readAllEmployee(): Observable<any> {
    return this.http.get(
      `${this.employeesApi}`,
      { headers: this.httpHeader },
    );
  }

  // READ ONE EMPLOYEE Basic Info

  readOneEmployee(employee_id: string): Observable<any> {
    return this.http.get(
      `${this.employeesApi}` + employee_id + '/',
      { headers: this.httpHeader },
    );
  }

  // UPDATE EMPLOYEE Basic Info

  updateEmployee(employee_id: string, value: any): Observable<any> {
    return this.http.put(
      `${this.employeesApi}` + employee_id + '/', value,
      { headers: this.httpHeader },
    );
  }

  // READ ONE EMPLOYEE Basic Info

  deleteEmployee(employee_id: string): Observable<any> {
    return this.http.delete(
      `${this.employeesApi}` + employee_id + '/',
      { headers: this.httpHeader },
    );
  }

}
