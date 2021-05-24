import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagePaths } from '../common/enums/pagepaths';
import { HomeComponent } from '../pages/eager/home/home.component';
import { LayoutComponent } from '../pages/eager/layout/layout.component';

const routes: Routes = [
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
