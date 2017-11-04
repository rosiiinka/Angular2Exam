import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Router } from '@angular/router';
import { IUserState } from './user.state';
import toastr from 'toastr';

import { User } from '../../models/user';

// Services
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';

// User Constants
export const REGISTER_USER = 'register/user';
export const LOGIN_USER = 'login/user';
export const LOGOUT_USER = 'logout/user';

@Injectable()
export class UserActions {
  constructor(
    private ngRedux: NgRedux<IUserState>,
    private userService: UserService,
    private authService: AuthService,
    private httpService: HttpService,
    private router: Router
  ) { }

  register(user: User) {
    this.userService
      .register(user)
      .subscribe(res => {
        if (res.success) {
          toastr.success(res.message);
          this.router.navigateByUrl('/user/login');
          this.ngRedux.dispatch({
            type: REGISTER_USER
          });
        } else {
          let errors = res.errors;
          if (errors) {
            let firstKey = Object.keys(errors)[0];
            toastr.error(errors[firstKey]);
          }
        }
      });
  }

  login(user: User) {
    this.userService
      .login(user)
      .subscribe(res => {
        if (res.success) {
          console.log(res)
          this.authService.authenticate(res.token, res.user.name);
          toastr.success(res.message);
          this.router.navigateByUrl('/');
          this.ngRedux.dispatch({
            type: LOGIN_USER,
            user: res.user,
            token: res.token
          });
        } else {
          let errors = res.errors;
          if (errors) {
            let firstKey = Object.keys(errors)[0];
            toastr.error(errors[firstKey]);
          }
        }
      });
  }


  logout() {
    toastr.success('logout successful');
    this.authService.deauthenticate();

    this.router.navigateByUrl('/');
    this.ngRedux.dispatch({
      type: LOGOUT_USER
    });
  }
}
