import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MobileSidebarToggleDirective, SidebarToggleDirective } from './sidebar/sidebar.directive';

@NgModule({
  imports: [RouterModule, CoreModule],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SidebarToggleDirective,
    MobileSidebarToggleDirective
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SidebarToggleDirective,
    MobileSidebarToggleDirective
  ]
})
export class LayoutModule { }
