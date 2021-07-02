import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Order } from 'src/app/common/models/order';
import { Product } from 'src/app/common/models/product';
import { User } from 'src/app/common/models/user';
import { CarritoService } from 'src/app/core/services/carrito.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
    templateUrl: 'carrito.component.html'
})

export class CarritoComponent implements OnInit{

    
    public products: Product[] = [] as Product[];
    public precioTotalCarrito: number = 0;
    public user: User = {} as User;
    public newOrder: Order = {} as Order;

    constructor(private router: Router, private carritoService: CarritoService, private userService: UserService) {}
  
    ngOnInit(): void {
        this.products = this.carritoService.obtenerCarrito();
        this.user = this.userService.obtenerUsuario(1) //TODO: Id del usuario hardcodeado
        this.calcularPrecioTotalCarrito();
    }

    public calcularPrecioTotalCarrito(){
        this.precioTotalCarrito = 0;
        this.products.forEach((product: Product) => {
            this.precioTotalCarrito += product.price;
        });

        //console.log(this.precioTotalCarrito)
    }

    public eliminarProductoDelCarrito(idProducto: number){
        this.carritoService.eliminarProductoDelCarrito(idProducto);
        //console.log(idProducto)
        this.calcularPrecioTotalCarrito();
    }

    public confirmarCompra(){
        this.newOrder.products = this.products;
        this.newOrder.user = this.user;
        // TODO: Agregamos precio total de la orden?????
        this.carritoService.confirmarCompra(this.newOrder);
        console.log("Compra confirmada, entro")
    }
}