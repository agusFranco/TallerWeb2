import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { takeWhile } from 'rxjs/operators';
import { PagePaths } from 'src/app/common/enums/pagepaths';
import { AuthService } from 'src/app/core/services/auth.service';
import { NavigationService } from 'src/app/core/services/navigation.service';

import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';

@Component({
  templateUrl: 'layout.component.html',
})
export class LayoutComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatDrawer;

  // Public Component
  public navigating: boolean = false;

  constructor(
    private navigationService: NavigationService,
    private authService: AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.subscribeToNavigationEvents();
  }

  public openLoginModal(): void {
    const authDialogRef = this.dialog.open(AuthDialogComponent, {
      width: '32em',
      minHeight: '10em',
      data: {},
    });
  }

  public toggleSideNav(): void {
    // Define.
    this.drawer.toggle();
  }

  public handleMenuItemClick(event: any): void {
    this.navigationService.navigate(event);
  }

  public handleLogoutClick(): void {
    this.authService.clearSession();
    this.navigationService.navigate(PagePaths.Home);
  }

  public handleCartClick(): void {
    if (this.authService.getUser()) {
      this.navigationService.navigate(PagePaths.Carrito);
    } else {
      this.openLoginModal();
    }
  }

  private subscribeToNavigationEvents(): void {
    this.navigationService.onNavigationStart
      .pipe(takeWhile(() => true))
      .subscribe(() => {
        this.navigating = true;
      });

    this.navigationService.onNavigationEnd
      .pipe(takeWhile(() => true))
      .subscribe(() => {
        this.navigating = false;
      });
  }
}
