import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { takeWhile } from 'rxjs/operators';
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
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.subscribeToNavigationEvents();
  }

  public openLoginModal(): void {
    const authDialogRef = this.dialog.open(AuthDialogComponent, {
      width: '300px',
      data: {},
    });
  }

  public toggleSideNav(): void {
    // Define.
    this.drawer.toggle();
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
