import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

@Injectable()
export class HttpService {
  constructor(private httpService: Http) {}
  baseUrl:string = 'http://localhost:5000';
  
  post(url, data) {
    let token = window.localStorage.getItem('authToken');
    let headers: Headers = new Headers();
    headers.append('Authorization', `bearer ${token}`);
    headers.append('Content-Type', 'application/json')
    return this.httpService.post(this.baseUrl + url, data, {headers: headers})
  }

  get(url) {
    return this.httpService.get(this.baseUrl + url);
  }

  authorizedGet(url) {
    let token = window.localStorage.getItem('authToken');
    let headers: Headers = new Headers();
    headers.append('Authorization', `bearer ${token}`);
    headers.append('Content-Type', 'application/json');
    return this.httpService.get(this.baseUrl + url, {headers: headers});
  }
}