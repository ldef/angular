import { NgModule } from '@angular/core';

import { SandboxRoutingModule } from './sandbox.routing';
import { SandboxComponent } from './sandbox.component';
import { GridComponent } from './grid/grid.component';
import { ButtonComponent } from './button/button.component';
import { PostListComponent } from './posts/list/post-list.component';
import { PostEditComponent } from './posts/edit/post-edit.component';
import { PostService } from './posts/post.service';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [
    GridComponent,
    SandboxComponent,
    ButtonComponent,
    PostListComponent,
    PostEditComponent
  ],
  imports: [
    SharedModule,
    SandboxRoutingModule
  ],
  providers: [
    PostService
  ]
})
export class SandboxModule { }
