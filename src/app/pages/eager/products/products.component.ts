import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { PagePaths } from 'src/app/common/enums/pagepaths';
import { Product } from 'src/app/common/models/product';
import { CarritoService } from 'src/app/core/services/carrito.service';
import { ProductService } from 'src/app/core/services/products.service';

@Component({
  templateUrl: 'products.component.html',
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];
  public filteredProducts: Product[] = [];

  public productById: any;
  public id: number = 0;

  public categories: string[] = [];
  public currentCategory!: string | null;

  public loading: boolean = true;

  constructor(
    private router: Router,
    private productService: ProductService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.listarProductos();
  }

  public irACarrito(): void {
    this.router.navigate([PagePaths.Carrito]);
  }

  public listarProductos(): void {
    this.productService
      .get()
      .pipe(take(1))
      .subscribe((apiResponse) => {
        this.products = apiResponse.data;
        this.filteredProducts = this.products;

        this.categories = this.products.map((x) => {
          return x.category;
        });

        this.categories = [...new Set(this.categories)];
        this.loading = false;
      });
  }

  public agregarProductoAlCarrito(product: Product): number {
    console.log('producto: ' + JSON.stringify(product));
    this.carritoService.agregarProductoAlCarrito(product);
    let contador = 0;
    contador = this.carritoService.contarProductos();
    console.log('contador: ' + contador);
    this.listarProductos();
    return contador;
  }

  public handleCategoryClick(category: string): void {
    this.currentCategory = category;
    this.filteredProducts = this.products.filter((x) => x.category == category);
  }

  public handleClearCategory(): void {
    this.currentCategory = null;
    this.filteredProducts = this.products;
  }
}
