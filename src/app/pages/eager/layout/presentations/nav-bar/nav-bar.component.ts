import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/common/models/user';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: 'nav-bar.component.html',
})
export class NavBarComponent implements OnInit {
  @Output() onSideNavClick: EventEmitter<any> = new EventEmitter();
  @Output() onLoginClick: EventEmitter<any> = new EventEmitter();
  @Output() onMenuItemClick: EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthService) {}

  get user(): User {
    return this.authService.getUser();
  }

  ngOnInit() {}

  public handleSideNavClick(): void {
    this.onSideNavClick.emit();
  }

  public handleLoginClick(): void {
    this.onLoginClick.emit();
  }

  public handleMenuItemClick(route: string): void {
    this.onMenuItemClick.emit(route);
  }
}
