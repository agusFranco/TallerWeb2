import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Product } from 'src/app/common/models/product';
import { CarritoService } from 'src/app/core/services/carrito.service';

@Component({
    templateUrl: 'carrito.component.html'
})

export class CarritoComponent implements OnInit{

    public orders: any[] = [];
    public orderById: any;
    public precioTotalCarrito: number = 0;
  
    constructor(private router: Router, private carritoService: CarritoService) {}
  
    ngOnInit(): void {
        this.carritoService.getById(1)
        .pipe(take(1))
        .subscribe((apiResponse) => {
          this.orderById = apiResponse.data;
        });
        //console.log(this.orderById);

     
    }

    public calcularPrecioTotalCarrito(){
        this.precioTotalCarrito = 0;
        this.orderById.products.forEach((product: Product) => {
            this.precioTotalCarrito += product.price;
        });

        console.log(this.precioTotalCarrito)
    }
}