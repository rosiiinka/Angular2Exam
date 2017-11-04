import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { RegisterUserComponent } from '../components/user/register.component';
import { LoginUserComponent } from '../components/user/login.component';

// Providers
import { UserService } from '../services/user.service';
import { UserActions } from '../stores/user/user.actions';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ RegisterUserComponent, LoginUserComponent ],
  exports: [],
  providers: [ UserService, UserActions ]
})

export class UserModule {
  
}
