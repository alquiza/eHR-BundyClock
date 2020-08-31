import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/shared/classes/user/user';
import { UserService } from 'src/app/shared/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-read-all',
  templateUrl: './user-read-all.component.html',
  styleUrls: ['./user-read-all.component.scss']
})

export class UserReadAllComponent implements OnInit {

  authUserTitle = 'Authorized Users Manifest';
  authUserSubtitle = 'HR Officers & Payroll Masters';
  users: Observable<User[]>;
  user: User = new User();

  userHeaderLabels = [
    { name: 'Id', },
    { name: 'Username', },
    { name: 'Email', },
    { name: 'Actions', },
  ];

  actionButton00 = 'Details';
  actionButton01 = 'Delete';

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  private updateSubscription: Subscription;
  sortedData: User = new User();

  constructor(
    public authUserApi: UserService,
    public router: Router,
  ) { }

  dataSource = new MatTableDataSource<any>();

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.updateSubscription = interval(3000).subscribe(
      (valIn) => { this.userLists(); },
    );
  }

  userLists() {
    this.authUserApi.readAllUsers()
      .subscribe(
        authUsersData => { this.users = authUsersData; },
        error => { console.log(error); },
      );
    }

    userDetails(id: number) {
      this.router.navigate(['/admin/auth/', id])
    }

    deleteUser(id: number) {
      this.authUserApi.deleteUser(id)
        .subscribe(
          userData => { this.users = userData; },
          error => { console.log(error); },
        );
    }

}
