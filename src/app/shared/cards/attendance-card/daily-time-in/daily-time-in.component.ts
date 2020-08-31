import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DailyTime, DailyTimeIN } from 'src/app/shared/classes/attendance/attendance';
import { AttendanceService } from 'src/app/shared/services/attendance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-time-in',
  templateUrl: './daily-time-in.component.html',
  styleUrls: ['./daily-time-in.component.scss']
})

export class DailyTimeInComponent implements OnInit {

  employee_identity = 'Employee Identity';
  timeIn = 'TIME-IN';
  // dailyIns: Observable<DailyTime[]>;
  dailyIns: Observable<DailyTimeIN[]>;
  dailyIn: DailyTimeIN = new DailyTimeIN();
  dailyAttendances: any;

  constructor(
    private inApi: AttendanceService,
    public router: Router,
  ) {
    this.dailyAttendances = { employee_id: '', time_in: '', }
  }

  ngOnInit(): void { }

  timeInDailyIns() {
    this.inApi.timeIN(this.dailyIn)
      .subscribe(
        timeInData => {
          this.dailyIns = timeInData;
          alert(`${this.dailyAttendances.employee_id} logged in.`);
          this.router.navigate(['/']);
        },
        error => { console.log(error); },
      );

  }
}
