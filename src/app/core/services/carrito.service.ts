import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIEndpoints } from 'src/app/common/models/api/apiendpoints';
import { APIResponse } from 'src/app/common/models/api/apiresponse';
import { Order } from 'src/app/common/models/order';
import { Product } from 'src/app/common/models/product';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(){
    let carrito = sessionStorage.getItem("Carrito");
    if(carrito != null && carrito.length > 0){
      this.obtenerCarrito();
    }
  }

  private productosEnCarrito: Product[] = [
    {
      id: 1,
      name: "Producto 1",
      description: "Descripcion Prod 1",
      price: 10,
      category: { id: 1, description: "Categoria 1" }
    },
    {
      id: 2,
      name: "Producto 2",
      description: "Descripcion Prod 2",
      price: 30,
      category: { id: 1, description: "Categoria 1" }
    },
    {
      id: 3,
      name: "Producto 3",
      description: "Descripcion Prod 3",
      price: 40,
      category: { id: 2, description: "Categoria 2" }
    },
    {
      id: 4,
      name: "Producto 4",
      description: "Descripcion Prod 4",
      price: 60,
      category: { id: 3, description: "Categoria 3" }
    },
    {
      id: 5,
      name: "Producto 5",
      description: "Descripcion Prod 5",
      price: 80,
      category: { id: 1, description: "Categoria 1" }
    }
  ];
  
  public MockGuardarProductosEnCarritoSession(){
    sessionStorage.setItem("Carrito", JSON.stringify(this.productosEnCarrito));
  }

  public agregarProductoAlCarrito(product: Product){
    let carrito = this.obtenerCarrito();
    carrito.push(product);
    sessionStorage.setItem("Carrito", JSON.stringify(carrito));
  }

  public eliminarProductoDelCarrito(idProducto: number){
    let carrito = this.obtenerCarrito();
    var index = carrito.findIndex((p) =>  p.id === idProducto);
    if (index !== -1) carrito.splice(index, 1);
    sessionStorage.setItem("Carrito", JSON.stringify(carrito));
  }

  public obtenerCarrito(): Product[]{
    let carritoEnSession = JSON.parse(sessionStorage.getItem("Carrito") || "[]") as Product[];
    if(carritoEnSession != null && carritoEnSession.length > 0){
      return carritoEnSession as Product[];
    }
    return [];
  }

  public confirmarCompra(newOrder: Order){
    // Llamar al endpoint necesario
  }

}
