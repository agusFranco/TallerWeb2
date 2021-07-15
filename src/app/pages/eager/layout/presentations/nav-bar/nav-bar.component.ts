import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/common/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { CarritoService } from 'src/app/core/services/carrito.service';

@Component({
  selector: 'nav-bar',
  templateUrl: 'nav-bar.component.html',
})
export class NavBarComponent implements OnInit {
  @Output() onSideNavClick: EventEmitter<any> = new EventEmitter();
  @Output() onLoginClick: EventEmitter<any> = new EventEmitter();
  @Output() onMenuItemClick: EventEmitter<any> = new EventEmitter();
  @Output() onLogoutClick: EventEmitter<any> = new EventEmitter();
  @Output() onCartClick: EventEmitter<any> = new EventEmitter();

  constructor(
    private authService: AuthService,
    public carritoService: CarritoService
  ) {}

  get user(): User | null {
    return this.authService.getUser();
  }

  ngOnInit() {}

  public handleSideNavClick(): void {
    this.onSideNavClick.emit();
  }

  public handleCartClick(): void {
    this.onCartClick.emit();
  }

  public handleLoginClick(): void {
    this.onLoginClick.emit();
  }

  public handleLogoutClick(): void {
    this.onLogoutClick.emit();
  }

  public handleMenuItemClick(route: string): void {
    this.onMenuItemClick.emit(route);
  }

  public getContador(): number {
    return this.carritoService.contarProductos();
  }
}
