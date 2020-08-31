import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Identity } from 'src/app/shared/classes/identity/identity';
import { ActivatedRoute, Router } from '@angular/router';
import { IdentityService } from 'src/app/shared/services/identity/identity.service';

@Component({
  selector: 'app-identity-read-one',
  templateUrl: './identity-read-one.component.html',
  styleUrls: ['./identity-read-one.component.scss']
})

export class IdentityReadOneComponent implements OnInit {

  identities: Observable<Identity[]>;
  identity: Identity = new Identity();
  employee_id: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private identityApi: IdentityService,
  ) { }

  ngOnInit() {
    this.identity = new Identity();
    this.employee_id = this.route.snapshot.params['employee_id'];
    this.identityApi.readOneIdentity(this.employee_id)
      .subscribe(
        identityData => {
          console.log(identityData);
          this.identities = identityData;
        },
        error => { console.log(error); },
      );
  }

/*

  identityDetails(employee_id: any) {
    this.employee_id = this.route.snapshot.params['employee_id'];
    this.identityApi.readOneIdentity(this.employee_id)
      .subscribe(
        identityData => {
          console.log(identityData);
          this.identities = identityData;
        },
        error => { console.log(error); },
      );
  }
*/

  updateIdentities(employee_id: any) {
    this.identityApi.updateIdentity(this.employee_id, this.identity)
      .subscribe(
        identityData => {
          console.log(identityData);
          this.identities = identityData;
        },
        error => { console.log(error); },
      );
  }


}
