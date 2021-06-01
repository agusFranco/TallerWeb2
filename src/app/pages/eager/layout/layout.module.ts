import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { LayoutComponent } from './container/layout.component';
import { FooterComponent } from './presentations/footer/footer.component';
import { NavBarComponent } from './presentations/nav-bar/nav-bar.component';
import { SideBarComponent } from './presentations/side-bar/side-bar.component';

@NgModule({
  imports: [RouterModule, SharedModule, MaterialModule],
  exports: [RouterModule, LayoutComponent],
  declarations: [LayoutComponent, NavBarComponent, FooterComponent, SideBarComponent],
  providers: [],
})
export class LayoutModule {}
