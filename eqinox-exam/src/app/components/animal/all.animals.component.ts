import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, NgRedux } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { AnimalActions } from '../../stores/animal/animal.actions';
import { Animal } from '../../models/animal';

import { IAppState } from '../../stores/IAppState';

@Component({
  selector: 'all-animals',
  templateUrl: '../../views/animal/all.animals.component.html',
  styleUrls: ['../../css/animal/all.animals.css']
})
export class AllAnimalsComponent implements OnInit {
  animals: Animal[];
  currentPage: number = 1;
  searchText: string = '';

  constructor(
    private animalActions: AnimalActions,
    private activatedRoute: ActivatedRoute,
    private ngRedux: NgRedux<IAppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.animalActions.getAll();
    this.ngRedux
      .select(state => state.animals)
      .subscribe(animals => {
        this.animals = animals.filteredAnimals
      })
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      let page = params['page'];
      let search = params['search'];
      if (search) {
        this.searchText = search;
        this.animalActions.filterAnimals(search);
      }
      if (page) {
        this.currentPage = Number(page);
      } else {
        this.currentPage = 1
      }
    })
  }

  filterAnimals(searchText) {
    this.searchText = searchText;
    this.router.navigate(['/animals/all'], {
      queryParams: {
        page: this.currentPage,
        search: searchText
      }
    })
    this.animalActions.filterAnimals(searchText);
  }

  changePage(newPage) {
    this.currentPage = newPage;
    this.router.navigate(['/animals/all'], {
      queryParams: {
        page: this.currentPage,
        search: this.searchText
      }
    })
  }
}