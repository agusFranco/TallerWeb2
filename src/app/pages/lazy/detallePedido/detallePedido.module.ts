import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { detallePedidoComponent } from './container/detallePedido.component';

const routes: Routes = [
  {
    path: '',
    component: detallePedidoComponent,
  },
];

@NgModule({
  imports: [SharedModule, MaterialModule, HttpClientModule, RouterModule.forChild(routes)],
  exports: [detallePedidoComponent],
  declarations: [detallePedidoComponent],
  providers: [],
})
export class detallePedidoModule {}
