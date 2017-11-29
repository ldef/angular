import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { AuthenticationGuard } from './guards/authentication.guard';


@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    BrowserModule
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard
  ]
})
export class AuthenticationModule { }
