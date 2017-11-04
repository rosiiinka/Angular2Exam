import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserActions } from '../../stores/user/user.actions';

import  toastr  from 'toastr';

@Component({
  selector: 'register-user',
  templateUrl: '../../views/user/register.component.html'
})

export class RegisterUserComponent {
  user: User = new User();

  constructor(private userActions: UserActions) {}

  onSubmit() {
    this.userActions.register(this.user);
  }
}