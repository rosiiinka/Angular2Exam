import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserActions } from '../../stores/user/user.actions';
import { Router } from '@angular/router';

import  toastr  from 'toastr';

@Component({
  selector: 'login-user',
  templateUrl: '../../views/user/login.component.html'
})

export class LoginUserComponent {
  user: User = new User();

  constructor(
    private userActions: UserActions,
    private router: Router
  ) {}

  onSubmit() {
    this.userActions.login(this.user);
  }
}