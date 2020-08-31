import { Component, OnInit } from '@angular/core';

import { AttendanceService } from 'src/app/shared/services/attendance.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DailyTime } from 'src/app/shared/classes/attendance/attendance';

@Component({
  selector: 'app-daily-time-out',
  templateUrl: './daily-time-out.component.html',
  styleUrls: ['./daily-time-out.component.scss']
})
export class DailyTimeOutComponent implements OnInit {

  employee_identity = 'Employee Identity';
  timeOut = 'TIME-OUT';

  dailyOuts: Observable<DailyTime[]>;
  dailyOut: DailyTime = new DailyTime();
  dailyAttendances: any;

  constructor(
    private outApi: AttendanceService,
    private router: Router,
  ) {
    this.dailyAttendances = { employee_id: '', time_out: '', }
  }

  ngOnInit(): void { }

  timeOutDailyOuts() {
    this.outApi.timeOUT(this.dailyOut)
      .subscribe(
        timeOutData => {
          this.dailyOuts = timeOutData;
          alert(`you're logged out.`);
          this.router.navigate(['/']);
        },
        error => { console.log(error); },
      );
  }

}
