import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { PagePaths } from 'src/app/common/enums/pagepaths';
import { Order } from 'src/app/common/models/order';
import { Product } from 'src/app/common/models/product';
import { User } from 'src/app/common/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { CarritoService } from 'src/app/core/services/carrito.service';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  templateUrl: 'carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit {
  public products: Product[] = [] as Product[];
  public precioTotalCarrito: number = 0;
  public user!: User | null;
  public newOrder!: Order;
  public productosEliminadosDelCarrito: Product[] = [] as Product[];

  constructor(
    private router: Router,
    private carritoService: CarritoService,
    protected authService: AuthService,
    protected orderService: OrderService,
    protected notificationService: NotificationService,
    protected navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.products = this.carritoService.obtenerCarrito();
    this.user = this.authService.getUser(); //TODO: Id del usuario hardcodeado
    this.calcularPrecioTotalCarrito();
  }

  public calcularPrecioTotalCarrito(): void {
    this.precioTotalCarrito = 0;
    this.products.forEach((product: Product) => {
      this.precioTotalCarrito += product.price;
    });
  }

  public eliminarProductoDelCarrito(producto: Product): void {
    this.carritoService.eliminarProductoDelCarrito(producto.id);
    this.productosEliminadosDelCarrito.push(producto);
    this.products = this.carritoService.obtenerCarrito();
    this.calcularPrecioTotalCarrito();
  }

  public confirmarCompra(): void {
    let inputModel: any = {};
    inputModel.cognitoId = this.authService.getUser()?.cognitoId;
    inputModel.products = this.products;
    inputModel.date = new Date();

    this.orderService
      .create(inputModel)
      .pipe(take(1))
      .subscribe((outputModel) => {
        if (outputModel.hasError) {
          this.notificationService.showError(outputModel.message.text);
          return;
        }

        this.notificationService.showSuccess(outputModel.message.text);

        this.navigationService.navigateWithId(
          PagePaths.DetallePedido,
          outputModel.data.orderId
        );

        this.vaciarCarrito();
      });
  }

  public agregarUltimoProductoEliminado(): void {
    if (this.productosEliminadosDelCarrito.length != 0) {
      let productoRestablecer =
        this.productosEliminadosDelCarrito.pop() as Product;
      this.products.push(productoRestablecer);
      this.carritoService.agregarProductoAlCarrito(productoRestablecer);
      this.calcularPrecioTotalCarrito();
    }
  }

  public vaciarCarrito(): void {
    this.carritoService.vaciarCarrito();
    this.products.length = 0;
    this.calcularPrecioTotalCarrito();
  }

  public contarProductos(): number {
    let products;
    let counter = 0;
    products = this.carritoService.obtenerCarrito();
    products.forEach((product) => {
      counter++;
    });
    return counter;
  }
}
