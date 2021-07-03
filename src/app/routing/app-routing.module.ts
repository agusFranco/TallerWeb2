import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagePaths } from '../common/enums/pagepaths';
import { HomeComponent } from '../pages/eager/home/home.component';
import { ProductsComponent } from '../pages/eager/products/products.component';
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
      {
        path: PagePaths.Products,
        component: ProductsComponent,
      },
      // LAZY
      {
        path: PagePaths.Carrito,
        loadChildren: () =>
          import('src/app/pages/lazy/carrito/carrito.module').then(
            (m) => m.CarritoModule
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
