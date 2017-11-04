import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import 'rxjs/add/operator/map';

@Injectable()
export class StatsService {  
  constructor(
    private httpService: HttpService
  ) {}
  
  stats() {
    return this.httpService
      .get('/stats')
      .map(res => res.json())
  }
}