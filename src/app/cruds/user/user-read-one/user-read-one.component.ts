import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/classes/user/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-user-read-one',
  templateUrl: './user-read-one.component.html',
  styleUrls: ['./user-read-one.component.scss']
})
export class UserReadOneComponent implements OnInit {

  users: Observable<User[]>;
  user: User = new User();
  id: number;

  authUserTitle = 'Authorized User';
  authUserSubtitle = 'Human Resources Officers';
  items000 = 'Username:';
  items001 = 'E-Mail Address:';
  items002 = 'Surname:';
  items003 = 'First name:';
  items004 = '';
  actionButton00 = 'Auth Users';
  actionButton01 = 'Update';
  actionButton02 = 'Idenitties';

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public authUserApi: UserService,
  ) { }

  ngOnInit() {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];
    this.authUserApi.readOneUser(this.id)
      .subscribe(
        data => { console.log(data); this.user = data;},
        error => { console.log(error); },
      );
  }

/*
    this.authUserApi.readOneUser(this.id)
      .subscribe(
        userData => { console.log(userData); this.users = userData; },
        error => { console.log(error); },
      );
*/

  updateProfile() {
    this.authUserApi.updateUser(this.id, this.user)
      .subscribe(
        userData => { console.log(userData); },
        error => { console.log(error); },
      );
      this.router.navigate(['/admin/']);
  }

}
