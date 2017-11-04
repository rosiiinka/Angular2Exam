import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../stores/IAppState';
import { StatsActions } from '../../stores/stats/stats.actions';

@Component({
  selector: 'stats',
  templateUrl: '../../views/stats/stats.component.html'
})
export class StatsComponent implements OnInit {
  users: number;
  animals: number;

  constructor(
    private statsActions: StatsActions,
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
    this.statsActions.getStats();
    this.ngRedux
      .select(state => state.stats)
      .subscribe(stats => {
        this.users = stats.users;
        this.animals = stats.animals;
      })
  }
}