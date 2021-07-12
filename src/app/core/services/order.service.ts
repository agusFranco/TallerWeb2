<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======
>>>>>>> misPedidos
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIEndpoints } from 'src/app/common/models/api/apiendpoints';
import { APIResponse } from 'src/app/common/models/api/apiresponse';
<<<<<<< HEAD
import { Order } from 'src/app/common/models/order';
=======
>>>>>>> misPedidos

import { BaseService } from './base.service';

@Injectable({ providedIn: 'root' })
export class OrderService extends BaseService {
<<<<<<< HEAD
  constructor(protected http: HttpClient) {
    super(http);
  }

  public getByOrderId(inputModel: any): any {
    return this.executeGet<Order>(`${APIEndpoints.Order.Get}`);
  }

  public getByUserId(userId: any): Observable<APIResponse<Order[]>> {
    return this.executeGet<Order[]>(
      `${APIEndpoints.Order.Get}?userId=${userId}`
    );
  }

  public create(inputModel: any): any {
    return this.executePost<Order>(APIEndpoints.Order.Create, inputModel);
  }
}
=======
  
    public get(): Observable<APIResponse<any>> {
    return this.executeGet<any[]>(APIEndpoints.Orders.Get);
     }

  }
>>>>>>> misPedidos
