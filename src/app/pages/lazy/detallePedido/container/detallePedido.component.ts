import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/products.service';

@Component({
    templateUrl: 'detallePedido.component.html',
    styleUrls: ['./detallePedido.component.scss']
})

export class detallePedidoComponent implements OnInit {

    public products: any = [];

    constructor(private productServices: ProductService) { }

    ngOnInit(): void {
        this.productServices
          .get()
          .pipe(take(1))
          .subscribe((apiResponse) => {
            this.products = apiResponse.data;
            console.log(this.products);
          });
      }
}