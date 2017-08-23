import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridComponent } from './grid/grid.component';

export const routes: Routes = [
  { path: '', component: GridComponent },
  { path: 'grid', component: GridComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SandboxRoutingModule {}
