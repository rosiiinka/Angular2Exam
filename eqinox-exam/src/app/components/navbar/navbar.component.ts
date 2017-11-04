import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../stores/IAppState';
import { UserActions } from '../../stores/user/user.actions';

@Component({
  selector: 'navbar',
  templateUrl: '../../views/navbar/navbar.component.html',
  styleUrls: ['../../css/navbar/navbar.css']
})
export class Navbar implements OnInit {
  isAuthenticated: boolean = false;
  name: string = null;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private userActions: UserActions
  ) { }

  ngOnInit() {
    this.ngRedux
      .select(state => state.users)
      .subscribe(users => {
        this.isAuthenticated = users.isAuthenticated,
        this.name = users.user.name;
      })
  }

  logout() {
    this.userActions.logout();
  }
}
