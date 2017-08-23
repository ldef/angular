import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SandboxComponent } from './sandbox.component';
import { GridComponent } from './grid/grid.component';
import { ButtonComponent } from './button/button.component';

export const routes: Routes = [
  { path: '', component: SandboxComponent, children: [
    { path: '', component: GridComponent },
    { path: 'grid', component: GridComponent },
    { path: 'button', component: ButtonComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ]},
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SandboxRoutingModule {}
