import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Identity } from 'src/app/shared/classes/identity/identity';
import { IdentityService } from 'src/app/shared/services/identity/identity.service';

@Component({
  selector: 'app-identity-create',
  templateUrl: './identity-create.component.html',
  styleUrls: ['./identity-create.component.scss']
})
export class IdentityCreateComponent implements OnInit {

  addIdentityAppTitle = 'Integrated Identities System';
  addIdentityAppSubTitle = 'Human Resources Identities';
  addButtonName = 'Add/Submit';

  items000 = 'Employee ID#, Fingerprint, RFID#';
  items001 = 'Social Security System #';
  items002 = 'PhilHealth Insurance #';
  items003 = 'Housing Development Mutual Fund #';
  items004 = 'Tax Identification #';

  identities: Observable<Identity[]>;
  identity: Identity = new Identity();

  addIdentity: any;

  constructor(
    private identityApi: IdentityService,
  ) {
    this.addIdentity = {
      employee_id: '',
      social_id: '',
      health_id: '',
      housing_id: '',
      tax_id: '',
    }
  }

  ngOnInit() { this.identity = new Identity();
  }


  addIdentities() {
    this.identityApi.createIdentity(this.identity)
      .subscribe(
        identityData => { this.identities = identityData; },
        error => { console.log(); },
      );
  }

}
