import { Injectable } from '@angular/core';
import { Product } from 'src/app/common/models/product';

import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  contador: number = this.contarProductos();

  constructor(protected notificationService: NotificationService) {
    let carrito = localStorage.getItem('Carrito');
    if (carrito != null && carrito.length > 0) {
      this.obtenerCarrito();
    }
  }

  private productosEnCarrito: Product[] = [];

  public obtenerCarrito(): Product[] {
    let carrito = JSON.parse(
      localStorage.getItem('Carrito') || '[]'
    ) as Product[];
    if (carrito != null && carrito.length > 0) {
      return carrito as Product[];
    }
    return [];
  }

  public agregarProductoAlCarrito(product: Product) {
    let carrito = this.obtenerCarrito();
    carrito.push(product);
    localStorage.setItem('Carrito', JSON.stringify(carrito));
    this.notificationService.showSuccess('Producto agregado al carrito.');
  }

  public eliminarProductoDelCarrito(idProducto: number) {
    let carrito = this.obtenerCarrito();
    var index = carrito.findIndex((p) => p.id === idProducto);
    if (index !== -1) carrito.splice(index, 1);
    localStorage.setItem('Carrito', JSON.stringify(carrito));
  }

  public vaciarCarrito(): void {
    let carrito = this.obtenerCarrito();
    carrito.length = 0;
    localStorage.setItem('Carrito', JSON.stringify(carrito));
  }

  public contarProductos(): number {
    let products;
    let counter = 0;
    products = this.obtenerCarrito();
    products.forEach((product) => {
      counter++;
    });
    return counter;
  }
}
