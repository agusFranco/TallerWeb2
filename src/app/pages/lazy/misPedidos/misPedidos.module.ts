import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { misPedidosComponent } from './container/misPedidos.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  {
    path: '',
    component: misPedidosComponent,
  },
];

@NgModule({
  imports: [SharedModule, MaterialModule, HttpClientModule, RouterModule.forChild(routes), NgbModule ],
  exports: [misPedidosComponent ],
  declarations: [misPedidosComponent, ],
  bootstrap: [],
  providers: [],
})
export class misPedidosModule {}
