import { NgModule } from '@angular/core';

import { SandboxRoutingModule } from './sandbox.routing';
import { SandboxComponent } from './sandbox.component';
import { CoreModule } from '../core/core.module';
import { GridComponent } from './grid/grid.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    GridComponent,
    SandboxComponent,
    ButtonComponent
  ],
  imports: [
    CoreModule,
    SandboxRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class SandboxModule { }
