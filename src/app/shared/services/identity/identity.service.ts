import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  identitiesApi = 'http://127.0.0.1:8000/api/identities/';
  httpHeader = new HttpHeaders(
    { 'Content-Type': 'application/json' },
  );

  constructor(
    public http: HttpClient,
  ) { }

  // Employee Identity CRRUD

  // Create Employee Identities

  createIdentity(identityData: any): Observable<any> {
    return this.http.post(
      `${this.identitiesApi}`, identityData,
      { headers: this.httpHeader },
    );
  }

  // Read All Employees Identities

  readAllIdentities(): Observable<any> {
    return this.http.get(
      `${this.identitiesApi}`,
      { headers: this.httpHeader },
    );
  }

  // Read One Employee Identities

  readOneIdentity(employee_id: string): Observable<any> {
    return this.http.get(
      `${this.identitiesApi}` + employee_id + '/',
      { headers: this.httpHeader },
    );
  }

  // Update Employee Identities

  updateIdentity(employee_id: string, value: any): Observable<any> {
    return this.http.put(
      `${this.identitiesApi}` + employee_id + '/', value,
      { headers: this.httpHeader },
    );
  }

  // Delete Employee Identity

  deleteIdentity(employee_id: string): Observable<any> {
    return this.http.delete(
      `${this.identitiesApi}` + employee_id + '/',
      { headers: this.httpHeader },
    );
  }
}
