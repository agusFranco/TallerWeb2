import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  templateUrl: 'misPedidos.component.html',
  styleUrls: ['./misPedidos.component.scss'],
})
export class misPedidosComponent implements OnInit {
  public products: any[] = [];

  constructor(
    protected orderService: OrderService,
    protected authService: AuthService
  ) {}

  ngOnInit(): void {
    this.orderService
      .getByUserId(this.authService.getUser()?.cognitoId)
      .pipe(take(1))
      .subscribe((apiResponse) => {
        this.products = apiResponse.data;
      });
  }
}
