import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';
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

  @Input() contador: number = 0;
  

  constructor(private authService: AuthService, public carritoService: CarritoService) {

    this.contador = carritoService.contarProductos();
  }

  get user(): User | null{
    return this.authService.getUser();
  }

  ngOnInit() {}

  public handleSideNavClick(): void {
    this.onSideNavClick.emit();
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
}
