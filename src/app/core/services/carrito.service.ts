import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIEndpoints } from 'src/app/common/models/api/apiendpoints';
import { Order } from 'src/app/common/models/order';
import { Product } from 'src/app/common/models/product';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http: HttpClient, private userService: UserService){
    let carrito = localStorage.getItem("Carrito");
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
    localStorage.setItem("Carrito", JSON.stringify(this.productosEnCarrito));
  }

  public agregarProductoAlCarrito(product: Product){
    let carrito = this.obtenerCarrito();
    carrito.push(product);
    localStorage.setItem("Carrito", JSON.stringify(carrito));
  }

  public eliminarProductoDelCarrito(idProducto: number){
    let carrito = this.obtenerCarrito();
    var index = carrito.findIndex((p) =>  p.id === idProducto);
    if (index !== -1) carrito.splice(index, 1);
    localStorage.setItem("Carrito", JSON.stringify(carrito));
  }

  public obtenerCarrito(): Product[]{
    let carrito = JSON.parse(localStorage.getItem("Carrito") || "[]") as Product[];
    if(carrito != null && carrito.length > 0){
      return carrito as Product[];
    }
    return [];
  }

  public confirmarCompra(){
    // var newOrder: Order = {} as Order;
    // newOrder.user = this.userService.obtenerUsuario(1); //TODO: Usuario Hardcodeado
    // newOrder.products = this.productosEnCarrito;
    // console.log("BIEN LLEGO AL SERVICIO");
    // console.log(newOrder);
    // this.http.post(`${environment.apiUrl}carrito/confirmarCompra`, newOrder);
    // console.log(`${environment.apiUrl}carrito/confirmarCompra`)
  }

}
