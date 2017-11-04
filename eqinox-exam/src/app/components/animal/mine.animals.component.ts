import { Component, OnInit } from '@angular/core';
import { AnimalActions } from '../../stores/animal/animal.actions';
import { Animal } from '../../models/animal';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../stores/IAppState';

@Component({
  selector: 'mine-animals',
  templateUrl: '../../views/animal/mine.animals.component.html',
  styleUrls: ['../../css/animal/all.animals.css']
})
export class MineAnimalsComponent implements OnInit{
  animals: Animal[] = new Array

  constructor(
    private animalActions: AnimalActions,
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
    this.animalActions.getMineAnimals();
    this.ngRedux
      .select(state => state.animals)
      .subscribe(animals => {
        this.animals = animals.animals
      })
  }

  delete(id) {
    this.animalActions.deleteById(id)
  }
}