import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isAuthenticated() {
    let item = window.localStorage.getItem('authToken');

    if (item !== null && item !== '' && item !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  authenticate(token: string, name: string) {
    window.localStorage.setItem('authToken', token);
    window.localStorage.setItem('username', name);
  }

  deauthenticate() {
    window.localStorage.clear();
  }
}