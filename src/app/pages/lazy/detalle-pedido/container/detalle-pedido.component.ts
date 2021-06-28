import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/products.service';

@Component({
    templateUrl: 'detalle-pedido.component.html'
})

export class DetallePedidoComponent implements OnInit {

    public products: any[] = [];

    constructor(private productServices: ProductService) { }

    ngOnInit(): void {
        this.productServices
          .get()
          .pipe(take(1))
          .subscribe((apiResponse) => {
            this.products = apiResponse.data;
          });
      }
}