import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AttendanceService } from '../../shared/services/attendance.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'attendance-sidenav',
  templateUrl: './attendance-sidenav.component.html',
  styleUrls: ['./attendance-sidenav.component.scss']
})
export class AttendanceSidenavComponent implements OnInit {

  sideNavList00 = 'Identities';
  sideNavList01 = 'Employees Basic Info';
  sideNavList02 = 'Employees Contacts';
  sideNavList03 = 'Employees Records';
  sideNavList04 = 'Employees Attendances';
  sideNavList05 = 'Employees Salary';

  isHandset$: Observable<boolean> =
    this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe( map( result => result.matches ),
      shareReplay()
    );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: AttendanceService,
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
  }

}
