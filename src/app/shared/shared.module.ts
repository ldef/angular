import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CoreModule } from './../core/core.module';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    RouterModule
  ],
  exports: [
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
