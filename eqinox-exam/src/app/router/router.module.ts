import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

// User Components
import { RegisterUserComponent } from '../components/user/register.component';
import { LoginUserComponent } from '../components/user/login.component';

// Animal Components
import { AddAnimalComponent } from '../components/animal/add.component';
import { AllAnimalsComponent } from '../components/animal/all.animals.component';
import { AnimalDetailsComponent } from '../components/animal/animal.details.component';
import { MineAnimalsComponent } from '../components/animal/mine.animals.component'

// Stats Components
import { StatsComponent } from '../components/stats/stats.component';

// Authentication
import { PrivateRoute } from '../authentication/private.route.';


const routes: Routes = [
  { path: 'user/register', component: RegisterUserComponent },
  { path: 'user/login', component: LoginUserComponent },
  { path: 'animals/add', component: AddAnimalComponent, canActivate: [PrivateRoute] },
  { path: 'animals/all', component: AllAnimalsComponent, canActivate: [PrivateRoute] },
  { path: 'animals/details/:id', component: AnimalDetailsComponent, canActivate: [PrivateRoute] },
  { path: 'animals/mine', component: MineAnimalsComponent, canActivate: [PrivateRoute] },
  { path: 'stats', component: StatsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutesModule {

}
