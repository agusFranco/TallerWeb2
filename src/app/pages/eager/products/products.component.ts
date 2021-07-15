import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { PagePaths } from 'src/app/common/enums/pagepaths';
import { Product } from 'src/app/common/models/product';
import { ProductService } from 'src/app/core/services/products.service';
import { CarritoService } from 'src/app/core/services/carrito.service';
import { APIEndpoints } from 'src/app/common/models/api/apiendpoints';

@Component({
  templateUrl: 'products.component.html',
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];
  public productById: any;
  public id: number=0;
  

  constructor(
    private router: Router, 
    private productService: ProductService,  
    private carritoService: CarritoService,
    ) {}

  ngOnInit(): void {
    
    this.listarProductos();

  }

  public irACarrito(): void {
    this.router.navigate([PagePaths.Carrito]);
  }

  public listarProductos():void{
    this.productService
      .get()
      .pipe(take(1))
      .subscribe((apiResponse) => {
        this.products = apiResponse.data;
      });
  }

  public agregarProductoAlCarrito(product: Product):number {

    console.log("producto: " + JSON.stringify(product));  
    this.carritoService.agregarProductoAlCarrito(product);
    let contador=0;
    contador=this.carritoService.contarProductos();
    console.log("contador: "+contador);
    this.listarProductos();
    return contador;
  }
}
