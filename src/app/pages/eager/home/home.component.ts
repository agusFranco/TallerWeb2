import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagePaths } from 'src/app/common/enums/pagepaths';

@Component({
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  public irACarrito(): void {
    this.router.navigate([PagePaths.Carrito]);
  }
}
