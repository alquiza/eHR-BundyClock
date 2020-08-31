import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DailyTime, DailyTimeIN, DailyTimeOUT } from 'src/app/shared/classes/attendance/attendance';
import { AttendanceService } from 'src/app/shared/services/attendance.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-attendance-read-all',
  templateUrl: './attendance-read-all.component.html',
  styleUrls: ['./attendance-read-all.component.scss']
})

export class AttendanceReadAllComponent implements OnInit {

  companyName = 'Gemphil Technologies, Inc.';
  appName = 'Attendance Report';
  tableLabelINs = [
    { titleIN: 'Dates IN', },
    { titleIN: 'Employee ID#s', },
    { titleIN: 'Timed-In', },
  ];
  tableLabelOUTs = [
    { titleOUT: 'Dates OUT', },
    { titleOUT: 'Employee ID#s', },
    { titleOUT: 'Timed-Out'}
  ];

  // working but not right ==> dailyIns: Observable<DailyTime[]>;
  //  hmmmm  ==> dailyOuts: Observable<DailyTime[]>;

  dailyIns: Observable<DailyTimeIN[]>;
  dailyOuts: Observable<DailyTimeOUT[]>;
  dailyIn: DailyTimeIN = new DailyTimeIN();
  dailyOut: DailyTimeOUT = new DailyTimeOUT();

  constructor(
    private inApi: AttendanceService,
    private outApi: AttendanceService,
    public router: Router,
  ) { }

  private updateSubscription: Subscription;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  AllIns: DailyTime = new DailyTime();
  dataSource = new MatTableDataSource<any>();

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.updateSubscription = interval(3000).subscribe(
      (valIn) => { this.listAllDailyIns(); },
    );

    this.updateSubscription = interval(3000).subscribe(
      (valOut) => { this.listAllDailyOuts(); },
    );
  }

  listAllDailyIns() {
    this.inApi.getAllDailyTimeIN()
    .subscribe(
      dailyTimeInData => {
        this.dailyIns = dailyTimeInData;
        console.log(dailyTimeInData); },
      error => { console.log(error); },
    );
  }

  listAllDailyOuts() {
    this.outApi.getAllDailyTimeOUT()
    .subscribe(
      dailyTimeOutData => {
        this.dailyOuts = dailyTimeOutData;
        console.log(dailyTimeOutData);
      },
      error => { console.log(error); },
    );
  }

}
