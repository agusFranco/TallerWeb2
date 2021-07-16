import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIEndpoints } from 'src/app/common/models/api/apiendpoints';
import { APIResponse } from 'src/app/common/models/api/apiresponse';
import { Order } from 'src/app/common/models/order';

import { BaseService } from './base.service';

@Injectable({ providedIn: 'root' })
export class OrderService extends BaseService {
  constructor(protected http: HttpClient) {
    super(http);
  }

  public getByOrderId(id: any): Observable<APIResponse<Order>> {
    return this.executeGet<Order>(`${APIEndpoints.Order.GetByOrderId}/${id}`);
  }

  // public getByOrdersId(orderId: any): Observable<APIResponse<Order[]>> {
  //   return this.executeGet<Order[]>(
  //     `${APIEndpoints.Order.Get}?orderId=${orderId}`
  //     );
  // }

  public getByUserId(userId: any): Observable<APIResponse<Order[]>> {
    return this.executeGet<Order[]>(
      `${APIEndpoints.Order.Get}?userId=${userId}`
    );
  }

  public create(inputModel: any): Observable<APIResponse<Order>> {
    return this.executePost<Order>(APIEndpoints.Order.Create, inputModel);
  }
}
