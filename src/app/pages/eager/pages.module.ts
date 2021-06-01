import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomeComponent } from './home/home.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, RouterModule, LayoutModule],
  exports: [RouterModule, LayoutModule, HomeComponent],
  providers: [],
})
export class PagesModule {}
