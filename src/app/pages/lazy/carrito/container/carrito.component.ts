import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { count, take } from 'rxjs/operators';
import { Order } from 'src/app/common/models/order';
import { Product } from 'src/app/common/models/product';
import { User } from 'src/app/common/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { CarritoService } from 'src/app/core/services/carrito.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  templateUrl: 'carrito.component.html',
})
export class CarritoComponent implements OnInit {
  public products: Product[] = [] as Product[];
  public precioTotalCarrito: number = 0;
  public user!: User | null;
  public newOrder!: Order;
  public productosEliminadosDelCarrito: Product[] = [];

  constructor(
    private router: Router,
    private carritoService: CarritoService,
    protected authService: AuthService,
    protected orderService: OrderService,
    protected notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.products = this.carritoService.obtenerCarrito();
    this.user = this.authService.getUser(); //TODO: Id del usuario hardcodeado
    this.calcularPrecioTotalCarrito();
  }

  public calcularPrecioTotalCarrito() {
    this.precioTotalCarrito = 0;
    this.products.forEach((product: Product) => {
      this.precioTotalCarrito += product.price;
    });
  }

  public eliminarProductoDelCarrito(producto: Product) {
    this.carritoService.eliminarProductoDelCarrito(producto.id);
    this.productosEliminadosDelCarrito.push(producto);
    this.products = this.carritoService.obtenerCarrito();
    this.calcularPrecioTotalCarrito();
  }

  public confirmarCompra() {
    let inputModel: any = {};
    inputModel.cognitoId = this.authService.getUser()?.cognitoId;
    inputModel.products = this.products;
    inputModel.date = new Date();

    this.orderService
      .create(inputModel)
      .pipe(take(1))
      .subscribe((outputModel: any) => {
        if (outputModel.hasError) {
          this.notificationService.showError(outputModel.message.text);
          return;
        }

        this.notificationService.showSuccess(outputModel.message.text);
      });
  }

  public agregarUltimoProductoEliminado() {
    if (this.productosEliminadosDelCarrito.length != 0) {
      let productoRestablecer =
        this.productosEliminadosDelCarrito.pop() as Product;
      this.products.push(productoRestablecer);
      this.calcularPrecioTotalCarrito();
    }
  }

  public MockGuardarProductosEnCarritoSession() {
    this.carritoService.MockGuardarProductosEnCarritoSession();
    this.products = this.carritoService.obtenerCarrito();
    this.calcularPrecioTotalCarrito();
  }

  public agregarProductoAlCarritoMock():void {
    let product: Product = {
      id: 6,
      name: 'Producto 6',
      description: 'Descripcion Prod 6',
      price: 100,
      imageUrl:"",
      category: { id: 1, description: 'Categoria 1' },
    };

    this.carritoService.agregarProductoAlCarrito(product);
    this.products = this.carritoService.obtenerCarrito();
    this.calcularPrecioTotalCarrito();
  }

  public vaciarCarrito():void{
    this.carritoService.vaciarCarrito();
    this.products.length = 0;
    this.calcularPrecioTotalCarrito();
  }

  public contarProductos():number{
    let products;
    let counter=0;
    products=this.carritoService.obtenerCarrito();
    products.forEach(product => {
      counter++;
    });
    return counter;
  }
}
