import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { LayoutComponent } from './container/layout.component';
import { FooterComponent } from './presentations/footer/footer.component';
import { NavBarComponent } from './presentations/nav-bar/nav-bar.component';
import { SideBarComponent } from './presentations/side-bar/side-bar.component';

const Components = [
  LayoutComponent,
  NavBarComponent,
  FooterComponent,
  SideBarComponent,
  AuthDialogComponent,
];

@NgModule({
  imports: [RouterModule, SharedModule, MaterialModule],
  exports: [RouterModule, LayoutComponent],
  declarations: [Components],
  providers: [],
})
export class LayoutModule {}
