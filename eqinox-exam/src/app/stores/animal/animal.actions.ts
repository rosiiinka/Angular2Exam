import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Router } from '@angular/router';
import { IAnimalState } from './animal.state';
import toastr from 'toastr';

import { Animal } from '../../models/animal';

// Services
import { AnimalService } from '../../services/animal.service';

// Constants
export const ADD_ANIMAL = 'animal/add';
export const GET_ALL_ANIMALS = 'get/all/animals';
export const FILTER_ANIMALS = 'filter/animals';
export const GET_BY_ID = 'get/by/id';
export const CREATE_REVIEW = 'create/review';
export const LIKE_ANIMAL = 'like/animal';

@Injectable()
export class AnimalActions {
  constructor(
    private ngRedux: NgRedux<IAnimalState>,
    private animalService: AnimalService,
    private router: Router
  ) { }

  add(animal: Animal) {
    this.animalService
      .add(animal)
      .subscribe(res => {
        if (res.success) {
          toastr.success(res.message);
          this.router.navigateByUrl('/animals/all');
          this.ngRedux.dispatch({
            type: ADD_ANIMAL,
            animal: res.animal
          })
        } else {
          let errors = res.errors;
          if (errors) {
            let firstKey = Object.keys(errors)[0];
            toastr.error(errors[firstKey]);
          }
        }
      })
  }

  getAll() {
    this.animalService
      .getAll()
      .subscribe(animals => {
        this.ngRedux.dispatch({
          type: GET_ALL_ANIMALS,
          animals
        })
      })
  }

  filterAnimals(searchText: string) {
    this.ngRedux.dispatch({
      type: FILTER_ANIMALS,
      searchText
    })
  }

  getById(id) {
    this.animalService
      .getById(id)
      .subscribe(animal => {
        this.animalService
          .getCommentsById(id)
          .subscribe(comments => {
            animal.comments = comments;
            console.log(animal);
            this.ngRedux.dispatch({
              type: GET_BY_ID,
              animal
            })
          })
      })
  }

  createReactionById(id, reaction) {
    this.animalService
      .createReactionById(id, reaction)
      .subscribe(res => {
        if (res.success) {
          toastr.success(res.message);
          this.getById(id);
        } else {
          toastr.error(res.message);
        }
      })
  }

  createCommentById(id, comment) {
    this.animalService
      .createCommentById(id, comment)
      .subscribe(res => {
        if (res.success) {
          toastr.success(res.message);
          this.getById(id);
        } else {
          toastr.error(res.message);
        }
      })
  }

  getMineAnimals() {
    this.animalService
      .getMineAnimals()
      .subscribe(animals => {
        this.ngRedux.dispatch({
          type: GET_ALL_ANIMALS,
          animals
        })
      })
  }

  deleteById(id) {
    this.animalService
      .deleteById(id)
      .subscribe(res => {
        if (res.success) {
          toastr.success(res.message);
          this.getMineAnimals();
        } else {
          toastr.error(res.message);
        }
      })
  }
}
