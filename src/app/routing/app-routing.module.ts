import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagePaths } from '../common/enums/pagepaths';
import { HomeComponent } from '../pages/eager/home/home.component';
import { LayoutComponent } from '../pages/eager/layout/container/layout.component';

const routes: Routes = [
  { path: '', redirectTo: PagePaths.Home, pathMatch: 'full' },
  {
    // DEFAULT
    path: '',
    component: LayoutComponent,
    children: [
      // EAGER
      {
        path: PagePaths.Home,
        component: HomeComponent,
      },
      // LAZY
      {
        path: PagePaths.Carrito,
        loadChildren: () =>
          import('src/app/pages/lazy/carrito/carrito.module').then(
            (m) => m.CarritoModule
          ),
      },
      {
        path: PagePaths.DetallePedido,
        loadChildren: () =>
          import('src/app/pages/lazy/detalle-pedido/detalle-pedido.module').then(
            (m) => m.DetallePedidoModule
          ),
      },
      {
        path: PagePaths.MisPedidos,
        loadChildren: () =>
          import('src/app/pages/lazy/misPedidos/misPedidos.module').then(
            (m) => m.misPedidosModule
          ),
      },
    ],
  },
  // WILDCARD PARA IR SIEMPRE A HOME
  { path: '**', redirectTo: PagePaths.Home },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
