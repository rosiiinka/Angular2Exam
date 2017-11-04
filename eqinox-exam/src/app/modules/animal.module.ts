import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgRedux } from 'ng2-redux';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';

// Components
import { AddAnimalComponent } from '../components/animal/add.component';
import { AllAnimalsComponent } from '../components/animal/all.animals.component';
import { AnimalDetailsComponent } from '../components/animal/animal.details.component';
import { MineAnimalsComponent } from '../components/animal/mine.animals.component';

// Providers
import { AnimalService } from '../services/animal.service';
import { AnimalActions } from '../stores/animal/animal.actions';


@NgModule({
  imports: [ CommonModule, FormsModule, NgxPaginationModule, RouterModule ],
  declarations: [ AddAnimalComponent, AllAnimalsComponent, AnimalDetailsComponent, MineAnimalsComponent ],
  exports: [],
  providers: [ AnimalService, AnimalActions ]
})

export class AnimalModule {
}
