import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/products.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { OrderService } from 'src/app/core/services/order.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { PagePaths } from 'src/app/common/enums/pagepaths';
import { Order } from 'src/app/common/models/order';

@Component({
    selector: 'app-root',
    templateUrl: 'detallePedido.component.html',
    styleUrls: ['./detallePedido.component.scss']
})

export class detallePedidoComponent implements OnInit {

    public products: any = [];
    public orders: any[] = [];
    public order!: Order;
    public TotalOrden:number =0;

    constructor(
      private productServices: ProductService,
      private activatedRoute: ActivatedRoute,
      protected orderService: OrderService,
      protected authService: AuthService,
      protected navigationService: NavigationService
      ){}

    /*
    ngOnInit(): void {
        this.productServices
          .get()
          .pipe(take(1))
          .subscribe((apiResponse) => {
            this.products = apiResponse.data;
            console.log(this.products);
          });
      }
      */

      ngOnInit(): void {
        // this.orderService
        //   .getByUserId(this.authService.getUser()?.cognitoId)
        //   .pipe(take(1))
        //   .subscribe((apiResponse) => {
        //     this.orders = apiResponse.data;
        //     console.log(this.orders);
    
        //   });
        this.activatedRoute.params.pipe(take(1)).subscribe((parameters) => {   

            let id = parameters.id;

            if(!id && id == null){
              // Mostrar un mensaje de error
              this.navigationService.navigate(PagePaths.Home);
              return;
            }

            this.orderService.getByOrderId(id)
            .pipe(take(1))
            .subscribe((response) => {
              if(response && response.hasError){
                // mostrame un mensaje de error
                return;
              }

              this.order = response.data;
            });
        })

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