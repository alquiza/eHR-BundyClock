import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/classes/user/user';
import { UserService } from 'src/app/shared/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: Observable<User[]>;
  user: User = new User();

  constructor(
    private userApi: UserService,
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.userApi.loginUser(this.user)
      .subscribe(
        authUserData => {
          console.log(authUserData);
          this.router.navigate(['/admin']);

        },
        error => { console.log(error); },
      );
  }

}
