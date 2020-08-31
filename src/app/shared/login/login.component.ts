import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/classes/user/user';
import { Observable } from 'rxjs';
import { UserService } from '../services/user/user.service';
import { AuthService } from '../services/auth/auth.service';
import { TokenStorageService } from '../services/token-storage/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  form: any = {};
  isAuthenticated = false;
  isLoginFailed = false;
  errorMessage = 'CALL ET PHONE HOME';
  roles: string[] = [];

  users: Observable<User[]>;
  user: User = new User();

  loginUser: any;

  loginAppTitle = 'Integrated Authentication System';
  loginAppSubTitle = 'For Authorized Users Only';
  loginButtonName = 'Submit';

  constructor(
    public router: Router,
    public userLoginApi: UserService,
    public authUserLoginApi: UserService,
    private authApi: AuthService,
    private tokenStorage: TokenStorageService,
  ) {
    this.loginUser = {
      username: '',
      password: '',
    }
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isAuthenticated = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  login() {
    this.userLoginApi.loginUser(this.loginUser)
      .subscribe(
        loginData => { this.loginUser = loginData },
        error => { console.log(error); },
      );
  }

  onSubmit(): void {
    this.authApi.login(this.form)
      .subscribe(
        authDATA => {
          this.tokenStorage.saveToken(authDATA.accessToken);
          this.tokenStorage.saveUser(authDATA);

          this.isLoginFailed = false;
          this.isAuthenticated = true;
          this.roles = this.tokenStorage.getUser(),this.roles;
          this.reloadPage();
        },
      );
  }

  reloadPage(): void {
    window.location.reload();
  }


  authUserLogin(): void {
    this.authUserLoginApi.loginUser(this.user)
      .subscribe(
        authUserData => {
          console.log(authUserData);
          this.router.navigate(['/admin']);

        },
        error => { console.log(error); },
      );
  }


}
