import { Component, OnInit,  AfterViewInit, ViewChildren } from '@angular/core';
import { take } from 'rxjs/operators';
import { OrderService } from 'src/app/core/services/order.service';
import { Router } from '@angular/router';
import { PagePaths } from 'src/app/common/enums/pagepaths';

import { faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
   selector: 'app-root',
    templateUrl: 'misPedidos.component.html',
    styleUrls: ['./misPedidos.component.scss'],
    
})

export class misPedidosComponent implements OnInit {

    public orders: any = [];
    filmIcon = faFilm;
    constructor(private router: Router, private orderServices: OrderService) { }

    ngOnInit(): void {
        this.orderServices
          .get()
          .pipe(take(1))
          .subscribe((apiResponse) => {
            this.orders = apiResponse.data;
            console.log(this.orders);
          });
      }

      public handleDetallePedidoClick(): void {
        this.router.navigate([PagePaths.DetallePedido]);
      }
}