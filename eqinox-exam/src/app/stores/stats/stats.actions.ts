import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IStatsState } from './stats.state';
import toastr from 'toastr';

// Services
import { StatsService } from '../../services/stats.service';

// Constants
export const GET_STATS = 'stats/get';

@Injectable()
export class StatsActions {
  constructor(
    private ngRedux: NgRedux<IStatsState>,
    private statsService: StatsService
  ) { }
  
  getStats() {
    this.statsService
      .stats()
      .subscribe(res => {
        this.ngRedux.dispatch({
          type: GET_STATS,
          stats: res
        })
      })
  }
}