import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { misPedidosComponent } from './container/misPedidos.component';

const routes: Routes = [
  {
    path: '',
    component: misPedidosComponent,
  },
];

@NgModule({
  imports: [SharedModule, MaterialModule, RouterModule.forChild(routes)],
  exports: [misPedidosComponent],
  declarations: [misPedidosComponent],
  providers: [],
})
export class misPedidosModule {}
