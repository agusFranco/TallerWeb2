import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIEndpoints } from 'src/app/common/models/api/apiendpoints';
import { APIResponse } from 'src/app/common/models/api/apiresponse';
import { Product } from 'src/app/common/models/product';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService extends BaseService{

  private productosEnCarrito: Product[] = [
    {
      id: 1,
      name: "Producto 1",
      description: "Descripcion Prod 1",
      price: 10,
      category: { id: 1, description: "Categoria 1" },
    },
    {
      id: 2,
      name: "Producto 2",
      description: "Descripcion Prod 2",
      price: 30,
      category: { id: 1, description: "Categoria 1" },
    },
    {
      id: 3,
      name: "Producto 3",
      description: "Descripcion Prod 3",
      price: 40,
      category: { id: 2, description: "Categoria 2" },
    }
  ];

  public get(): Observable<APIResponse<any>> {
    return this.executeGet<any[]>(APIEndpoints.Carrito.Get);
  }

  public getById(id: number): Observable<APIResponse<any>> {
    return this.executeGet<any[]>(`${APIEndpoints.Carrito.Get}/${id}`);
  }

  public agregarProductoACarrito(product: Product){
    this.productosEnCarrito.push(product);
  }

  public eliminarProductoDelCarrito(idProducto: number){
    var index = this.productosEnCarrito.findIndex(function(p){
      return p.id === idProducto;
    })
    if (index !== -1) this.productosEnCarrito.splice(index, 1);
  }

  public obtenerCarrito(){
    return this.productosEnCarrito;
  }
}
