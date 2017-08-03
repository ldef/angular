import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MobileSidebarToggleDirective, SidebarToggleDirective } from './sidebar/sidebar.directive';

@NgModule({
  imports: [RouterModule, CoreModule],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SidebarToggleDirective,
    MobileSidebarToggleDirective
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    SidebarToggleDirective,
    MobileSidebarToggleDirective
  ]
})
export class LayoutModule { }
