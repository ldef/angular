import { NgModule } from '@angular/core';

import { SandboxRoutingModule } from './sandbox.routing';
import { CoreModule } from '../core/core.module';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CoreModule,
    SandboxRoutingModule
  ],
  providers: []
})
export class SandboxModule { }
