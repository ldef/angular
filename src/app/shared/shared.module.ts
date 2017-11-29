import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CoreModule } from './../core/core.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    RouterModule
  ],
  exports: [
    CoreModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
