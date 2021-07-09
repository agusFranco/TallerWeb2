import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LayoutModule } from './layout/layout.module';

const Components = [HomeComponent,ProductsComponent];
const InnerModules = [LayoutModule]


@NgModule({
  declarations: [Components],
  imports: [RouterModule, SharedModule, MaterialModule, InnerModules],
  exports: [RouterModule],
  providers: [],
})
export class PagesModule {}
