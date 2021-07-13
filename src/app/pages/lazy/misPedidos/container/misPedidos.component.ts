import { Component, OnInit,  AfterViewInit, ViewChildren } from '@angular/core';
import { take } from 'rxjs/operators';
import { Order } from 'src/app/common/models/order';
import { AuthService } from 'src/app/core/services/auth.service';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
   selector: 'app-root',
    templateUrl: 'misPedidos.component.html',
    styleUrls: ['./misPedidos.component.scss'],
    
})
export class misPedidosComponent implements OnInit {
  public orders: any[] = [];
  public TotalOrden:number =0;

  constructor(
    protected orderService: OrderService,
    protected authService: AuthService
  ) {}

  ngOnInit(): void {
    this.orderService
      .getByUserId(this.authService.getUser()?.cognitoId)
      .pipe(take(1))
      .subscribe((apiResponse) => {
        this.orders = apiResponse.data;
        console.log(this.orders);

      });
  }

  /* Se calcula el total */
  public calculateTotalPrice(products:any){
    let totalPrice = 0;
            products.map((product:any) => {
              totalPrice = totalPrice + product.price;
            });
            return totalPrice;
  }

}
