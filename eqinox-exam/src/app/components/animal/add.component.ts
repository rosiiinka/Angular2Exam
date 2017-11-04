import { Component, OnInit } from '@angular/core';
import { Animal } from '../../models/animal';
import { AnimalActions } from '../../stores/animal/animal.actions';
import { AnimalTypes } from '../../models/enums/animal.types';

@Component({
  selector: 'add-animal',
  templateUrl: '../../views/animal/add.component.html'
})
export class AddAnimalComponent implements OnInit {
  animal: Animal = new Animal();
  animalTypes: string[] = new Array

  constructor(private animalActions: AnimalActions) { }

  onSubmit() {
    this.animalActions.add(this.animal);
  }

  ngOnInit() {
    Object.keys(AnimalTypes).map(type => {
      let typeAsString = Number(type);
      if (Number.isNaN(typeAsString)) {
        this.animalTypes.push(type)
      }
    })
  }
}
