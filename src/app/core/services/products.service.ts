import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/common/models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor() {}

  public getProducts(): Observable<any[]> {
    return of([
      { id: 1, name: 'hola2' },
      { id: 2, desc: 'hola2' },
    ]);
  }
}
