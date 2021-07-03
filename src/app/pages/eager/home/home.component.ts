import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { PagePaths } from 'src/app/common/enums/pagepaths';
import { ProductService } from 'src/app/core/services/products.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  public products: any[] = [];
  public productById: any;

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .get()
      .pipe(take(1))
      .subscribe((apiResponse) => {
        this.products = apiResponse.data;
      });

    this.productService
      .getById(2)
      .pipe(take(1))
      .subscribe((apiResponse) => {
        this.productById = apiResponse.data;
      });
  }

  public irACarrito(): void {
    this.router.navigate([PagePaths.Carrito]);
  }

  public handleProductClick(): void {
    this.router.navigate([PagePaths.Products]);
  }
}
