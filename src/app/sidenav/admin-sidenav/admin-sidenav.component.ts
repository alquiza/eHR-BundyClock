import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AttendanceService } from '../../shared/services/attendance.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.scss']
})

export class AdminSidenavComponent implements OnInit {

  adminSideNavTitle = 'Admin';
  sideNavList00 = 'All Auth Users';
  sideNavList01 = 'Add Auth Users';
  sideNavList02 = 'Employees Identities';
  sideNavList03 = 'Add Employees Identities';
  sideNavList04 = 'Employees Basic Info';
  sideNavList05 = 'Add New Employee';
  sideNavList06 = 'Attendances'

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
