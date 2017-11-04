import { Component, Output, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Animal } from '../../models/animal';
import { Review } from '../../models/review';
import { AnimalActions } from '../../stores/animal/animal.actions';
import { IAppState } from '../../stores/IAppState';
import { NgRedux } from 'ng2-redux';
import { AnimalReactions } from '../../models/enums/animal.reactions';
import toastr from 'toastr';

@Component({
  selector: 'animal-details',
  templateUrl: '../../views/animal/animal.details.component.html'
})
export class AnimalDetailsComponent implements OnInit {
  animal: Animal = new Animal();
  review: Review = new Review();
  reactionTypes: string[] = new Array;
  reactions: {}[] = new Array;

  constructor(
    private activatedRoute: ActivatedRoute,
    private animalActions: AnimalActions,
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = Number(params['id']);
      if (id) {
        this.animalActions.getById(id);
      }
    })
    this.ngRedux
      .select(state => state.animals)
      .subscribe(animals => {
        this.animal = animals.animal;
        if (this.animal.reactions) {
          this.reactions = new Array;
          Object.keys(this.animal.reactions).map((temp) => {
            if (this.animal.reactions[temp] > 0) {
              this.reactions.push({
                type: temp,
                value: this.animal.reactions[temp]
              })
            }
          })
        }
      })

    Object.keys(AnimalReactions).map(type => {
      let typeAsString = Number(type);
      if (Number.isNaN(typeAsString)) {
        this.reactionTypes.push(type)
      }
    })


  }

  addReaction(value) {
    let reactionType = {
      type: value
    }
    this.animalActions.createReactionById(this.animal.id, reactionType);
  }

  addComment(value) {
    if (!value.trim()) {
      toastr.error('comment could not be empry');
    } else {
      let comment = {
        message: value
      }
      this.animalActions.createCommentById(this.animal.id, comment);
    }
  }
}