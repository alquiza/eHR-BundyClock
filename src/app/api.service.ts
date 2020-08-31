import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  projectsApi: 'http://127.0.0.1:8000/api/projects/';
  principalsApi: 'http://127.0.0.1:8000/api/principals/';
  contractorsApi: 'http://127.0.0.1:8000/api/contractors/';

  httpHeader = new HttpHeaders(
    { 'Content-Type': 'application/json' },
  );

  constructor( public http: HttpClient, ) { }


  readAllProjects(): Observable<any> {
    return this.http.get(
      `${this.projectsApi}`, { headers: this.httpHeader },
    );
  }

  readAllPrincipals(): Observable<any> {
    return this.http.get(
      `${this.principalsApi}`, { headers: this.httpHeader },
    );
  }

  readAllContractors(): Observable<any> {
    return this.http.get(
      `${this.contractorsApi}`, { headers: this.httpHeader },
    );
  }


}
