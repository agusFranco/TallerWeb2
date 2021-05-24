import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { CarritoComponent } from './container/carrito.component';

const routes: Routes = [
  {
    path: '',
    component: CarritoComponent,
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [CarritoComponent],
  declarations: [CarritoComponent],
  providers: [],
})
export class CarritoModule {}
