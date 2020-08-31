import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  authApi = 'http://127.0.0.1:8000/api/auth/';
  httpOptions = new HttpHeaders(
    { 'Content-Type': 'application/json' },
  );

  signIn: any;

  constructor(
    private http: HttpClient,
  ) {
    this.signIn = {
      username: '', password: ''
    }
  }

  login(credentials: any): Observable<any> {
    return this.http.post(
      `${this.authApi}`, {
        username: this.signIn.username,
        password: this.signIn.password,
      },
      { headers: this.httpOptions },
    );
  }
}
