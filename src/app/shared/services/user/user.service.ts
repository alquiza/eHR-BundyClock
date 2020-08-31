import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  authUserApi = 'http://127.0.0.1:8000/auth/';
  usersApi = 'http://127.0.0.1:8000/api/users/';
  httpHeader = new HttpHeaders(
    { 'Content-Type': 'application/json' },
  );

  constructor(
    public http: HttpClient,
  ) { }

  // USER CRRUD

  // USER LOGIN
  loginUser(loginDATA: any): Observable<any> {
    return this.http.post(
      `${this.authUserApi}`, loginDATA,
      { headers: this.httpHeader },
    );
  }

  /* CREATE USER */
  createUser(userDATA: any): Observable<any> {
    return this.http.post(
      `${this.usersApi}`, userDATA,
      { headers: this.httpHeader },
    );
  }

  /* READ ONE USER */
  readOneUser(id: number): Observable<any> {
    return this.http.get(
      `${this.usersApi}` + id + '/',
      { headers: this.httpHeader },
    );
  }

  /* READ ALL USER */
  readAllUsers(): Observable<any> {
    return this.http.get(
      `${this.usersApi}`,
      { headers: this.httpHeader },
    );
  }

  /* UPDATE USER */
  updateUser(id: number, value: any): Observable<any> {
    return this.http.put(
      `${this.usersApi}` + id + '/', value,
      { headers: this.httpHeader },
    );
  }

  /* DELETE USER */
  deleteUser(id: number): Observable<any> {
    return this.http.delete(
      `${this.usersApi}` + id + '/',
      { headers: this.httpHeader },
    );
  }

}
