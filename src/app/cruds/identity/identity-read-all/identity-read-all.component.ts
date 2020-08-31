import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Identity } from 'src/app/shared/classes/identity/identity';
import { IdentityService } from 'src/app/shared/services/identity/identity.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-identity-read-all',
  templateUrl: './identity-read-all.component.html',
  styleUrls: ['./identity-read-all.component.scss']
})
export class IdentityReadAllComponent implements OnInit {

  tableHeads = [
    { name: 'Employee ID#s', },
    { name: 'Actions', },
  ];

  actionButton00 = 'Add Identities';
  actionButton01 = 'Details';
  actionButton02 = 'Delete';

  identities: Observable<Identity[]>;
  identity: Identity = new Identity();
  employee_id: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  private updateSubscription: Subscription;

  constructor(
    public router: Router,
    public identityApi: IdentityService,
  ) { }

  dataSource = new MatTableDataSource<any>();

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.updateSubscription = interval(3000).subscribe(
      (valIn) => { this.listAllIdentities(); },
    );
  }

  listAllIdentities() {
    this.identityApi.readAllIdentities()
      .subscribe(
        identityData => {
          console.log(this.identity);
          this.identities = identityData; },
        error => { console.log(error); },
      );
  }

  identityDetails(employee_id: any) {
    this.router.navigate(['/admin/identity/', employee_id])
  }

  deleteIdentity(employee_id: any) {
    this.identityApi.deleteIdentity(this.employee_id)
      .subscribe(
        identityData => {
          console.log(identityData);
          this.identities = identityData;
        },
        error => {},
      );
  }

}
