import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AttendanceService {

  dailyInApi = 'http://127.0.0.1:8000/api/attendaces/daily/IN/';
  dailyOutApi = 'http://127.0.0.1:8000/api/attendaces/daily/OUT/';

  httpHeader = new HttpHeaders(
    { 'Content-Type': 'application/json' },
  );

  constructor(
    public http: HttpClient,
  ) { }

  getAllDailyTimeIN(): Observable<any> {
    return this.http.get(
      `${this.dailyInApi}`,
      { headers: this.httpHeader },
    );
  }

  timeIN(timeInData: any): Observable<any> {
    return this.http.post(
      `${this.dailyInApi}`, timeInData,
      { headers: this.httpHeader },
    );
  }

  getAllDailyTimeOUT(): Observable<any> {
    return this.http.get(
      `${this.dailyOutApi}`,
      { headers: this.httpHeader },
    );
  }

  timeOUT(timeOutData: any): Observable<any> {
    return this.http.post(
      `${this.dailyOutApi}`, timeOutData,
      { headers: this.httpHeader },
    );
  }

}
