import { NgModule, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { take } from 'rxjs/operators';
import { CarritoService } from 'src/app/core/services/carrito.service';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CarritoComponent } from './container/carrito.component';

const routes: Routes = [
  {
    path: '',
    component: CarritoComponent,
  },
];

@NgModule({
  imports: [SharedModule, MaterialModule, RouterModule.forChild(routes)],
  exports: [CarritoComponent],
  declarations: [CarritoComponent],
  providers: [],
})
export class CarritoModule {}
