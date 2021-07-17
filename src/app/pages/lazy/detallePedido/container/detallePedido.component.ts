import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { PagePaths } from 'src/app/common/enums/pagepaths';
import { Order } from 'src/app/common/models/order';
import { AuthService } from 'src/app/core/services/auth.service';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { OrderService } from 'src/app/core/services/order.service';
import { ProductService } from 'src/app/core/services/products.service';

@Component({
  templateUrl: 'detallePedido.component.html',
  styleUrls: ['./detallePedido.component.scss'],
})
export class detallePedidoComponent implements OnInit {
  public products: any = [];
  public orders: any[] = [];
  public order!: Order;
  public TotalOrden: number = 0;
  public loading: boolean = true;

  constructor(
    private productServices: ProductService,
    private activatedRoute: ActivatedRoute,
    protected orderService: OrderService,
    protected authService: AuthService,
    protected navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(take(1)).subscribe((parameters) => {
      let id = parameters.id;

      if (!id && id == null) {
        // Mostrar un mensaje de error
        this.navigationService.navigate(PagePaths.Home);
        return;
      }

      this.orderService
        .getByOrderId(id)
        .pipe(take(1))
        .subscribe((response) => {
          if (response && response.hasError) {
            // mostrame un mensaje de error
            this.navigationService.navigate(PagePaths.Home);
            return;
          }

          this.loading = false;
          this.order = response.data;
        });
    });
  }

  /* Se calcula el total */
  public calculateTotalPrice(products: any) {
    let totalPrice = 0;
    products.map((product: any) => {
      totalPrice = totalPrice + product.price;
    });
    return totalPrice;
  }
}
