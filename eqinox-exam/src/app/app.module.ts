import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutesModule} from './router/router.module';
import {HttpModule} from '@angular/http';
import {NgRedux} from 'ng2-redux';
import {User} from './models/user';

// redux
import {NgReduxModule} from 'ng2-redux';

// Components
import {AppComponent} from './app.component';
import {Navbar} from './components/navbar/navbar.component';
import {StatsComponent} from './components/stats/stats.component';

// custom modules
import {UserModule} from './modules/user.module';
import {AnimalModule} from './modules/animal.module';

// Providers
import {PrivateRoute} from './authentication/private.route.';
import {AuthService} from './services/auth.service';
import {HttpService} from './services/http.service';
import {StatsActions} from './stores/stats/stats.actions';
import {StatsService} from './services/stats.service';

// Store
import {store} from './stores/store';
import {IAppState} from './stores/IAppState';
import {LOGIN_USER} from './stores/user/user.actions';

@NgModule({
  declarations: [
    AppComponent,
    Navbar,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    NgReduxModule,
    HttpModule,
    UserModule,
    AnimalModule,
  ],
  providers: [PrivateRoute, AuthService, HttpService, StatsActions, StatsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
              private authService: AuthService) {
    ngRedux.provideStore(store);

    if (this.authService.isAuthenticated()) {
      const token = window.localStorage.getItem('authToken');
      const username = window.localStorage.getItem('username');
      let user = new User();
      user.name = username;
      this.ngRedux.dispatch({
        type: LOGIN_USER,
        user: user,
        token
      })
    }
  }
}
