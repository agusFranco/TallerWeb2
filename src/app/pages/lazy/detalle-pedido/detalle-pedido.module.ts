import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { DetallePedidoComponent } from './container/detalle-pedido.component';

const routes: Routes = [
  {
    path: '',
    component: DetallePedidoComponent,
  },
];

@NgModule({
  imports: [SharedModule, MaterialModule, RouterModule.forChild(routes)],
  exports: [DetallePedidoComponent],
  declarations: [DetallePedidoComponent],
  providers: [],
})
export class DetallePedidoModule {}
