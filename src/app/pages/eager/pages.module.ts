import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [LayoutComponent, HomeComponent],
  imports: [SharedModule, RouterModule],
  exports: [RouterModule, HomeComponent, LayoutComponent],
  providers: [],
})
export class PagesModule {}
