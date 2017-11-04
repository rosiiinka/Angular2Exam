import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { User } from '../models/user';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {  
  constructor(
    private httpService: HttpService
  ) {}

  register(user: User) {
    return this.httpService
      .post('/auth/signup', user)
      .map(res => res.json());
  }

  login(user: User) {
    return this.httpService
      .post('/auth/login', user)
      .map(res => res.json());
  }
}