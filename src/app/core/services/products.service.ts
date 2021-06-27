import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIEndpoints } from 'src/app/common/models/api/apiendpoints';
import { APIResponse } from 'src/app/common/models/api/apiresponse';

import { BaseService } from './base.service';

@Injectable({ providedIn: 'root' })
export class ProductService extends BaseService {
  public get(): Observable<APIResponse<any>> {
    return this.executeGet<any[]>(APIEndpoints.Products.Get);
  }

  public getById(id: number): Observable<APIResponse<any>> {
    return this.executeGet<any[]>(`${APIEndpoints.Products.Get}/${id}`);
  }
}
