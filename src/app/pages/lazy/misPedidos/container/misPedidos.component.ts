import { Component, OnInit, AfterViewInit, ViewChildren } from '@angular/core';
import { take } from 'rxjs/operators';
import { PagePaths } from 'src/app/common/enums/pagepaths';
import { Order } from 'src/app/common/models/order';
import { AuthService } from 'src/app/core/services/auth.service';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  templateUrl: 'misPedidos.component.html',
  styleUrls: ['./misPedidos.component.scss'],
})
export class misPedidosComponent implements OnInit {
  public orders: any[] = [];
  public TotalOrden: number = 0;
  public loading: boolean = true;

  constructor(
    protected orderService: OrderService,
    protected authService: AuthService,
    protected navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.orderService
      .getByUserId(this.authService.getUser()?.cognitoId)
      .pipe(take(1))
      .subscribe((apiResponse) => {
        this.loading = false;
        this.orders = apiResponse.data;
        this.orders.sort(this.orderOrder);
        console.log(this.orders);
      });
  }

  /* Se calcula el total */
  public calculateTotalPrice(products: any) {
    let totalPrice = 0;

    products.map((product: any) => {
      if (product && product.price) {
        totalPrice = totalPrice + product.price;
      }
    });

    return totalPrice;
  }

  public orderOrder(a: any, b: any) {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
    return 0;
  }

  public goToDetail(order: Order): void {
    this.navigationService.navigateWithId(
      PagePaths.DetallePedido,
      order.orderId
    );
  }
}
