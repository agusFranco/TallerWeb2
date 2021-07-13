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
      description: "Con estas zapatillas ADIDAS en tus pies podrás correr en el parque y luego tomar un café con amigos con total comodidadSu exterior de malla ofrece transpirabilidad que mantiene tus pies frescos de la mañana a la noche",
      price: 10,
      category: { id: 1, description: "Categoria 1" },
      imageUrl: "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-adidas-runfalcon-2-0-gris-2820026-100010gz8078001-1.jpg"
    },
    {
      id: 2,
      name: "Producto 2",
      description: "Descripcion Prod 2",
      price: 30,
      category: { id: 1, description: "Categoria 1" },
      imageUrl: "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/campera-con-capucha-puma-evostripe-gris-640020585812003-1.jpg"
    },
    {
      id: 3,
      name: "Producto 3",
      description: "Descripcion Prod 3",
      price: 40,
      category: { id: 2, description: "Categoria 2" },
      imageUrl: "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-adidas-running-tokyo-run-negro-100020gd5029001-1.jpg"
    },
    {
      id: 4,
      name: "Producto 4",
      description: "Descripcion Prod 4",
      price: 60,
      category: { id: 3, description: "Categoria 3" },
      imageUrl: "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/e/pelota-de-futbol-adidas-starlancer-club-blanca-100040gk3499001-1.jpg"
    },
    {
      id: 5,
      name: "Producto 5",
      description: "Descripcion Prod 5",
      price: 80,
      category: { id: 1, description: "Categoria 1" },
      imageUrl: "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-nike-air-zoom-structure-23-azul-510010cz6720402-1.jpg"
    }
  ];
  
  public obtenerCarrito(): Product[]{
    let carrito = JSON.parse(localStorage.getItem("Carrito") || "[]") as Product[];
    if(carrito != null && carrito.length > 0){
      return carrito as Product[];
    }
    return [];
  }

  public MockGuardarProductosEnCarrito(){
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

  public vaciarCarrito():void{
    let carrito = this.obtenerCarrito();
    carrito.length = 0;
    localStorage.setItem("Carrito", JSON.stringify(carrito));
  }

}
