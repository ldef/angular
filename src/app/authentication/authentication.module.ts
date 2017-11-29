import { NgModule, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticationService } from './authentication.service';
import { AuthenticationGuard } from './guards/authentication.guard';


@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    BrowserModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Injector]
      }
    })
  ],
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard
  ]
})
export class AuthenticationModule { }

/**
 * Factory for JWT Token
 * @param {Injector} injector The authorization service
 */
function jwtOptionsFactory(injector: Injector) {
  return {
    tokenGetter: () => {
      return injector.get(AuthenticationService).token;
    }
  }
}

