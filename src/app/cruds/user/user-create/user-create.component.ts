import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/classes/user/user';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})

export class UserCreateComponent implements OnInit {

  users: Observable<User[]>;
  user: User = new User();

  addUser: any;

  addUserAppTitle = 'Integrated Authentication System';
  addUserAppSubTitle = 'Authorized Users Only';
  addButtonName = 'Authorize';

  items000 = 'Username:';
  items001 = 'Password:';
  items002 = 'Email Address:';

  constructor(
    public userAddApi: UserService,
  ) {
    this.addUser = {
      username: '',
      password: '',
      email: '',
    }
  }

  ngOnInit() { this.user = new User();
  }

  addUsers() {
    this.userAddApi.createUser(this.user)
      .subscribe(
        loginData => { this.users = loginData },
        error => { console.log(error); },
      );
  }

}
