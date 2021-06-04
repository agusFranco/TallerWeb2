import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { takeWhile } from 'rxjs/operators';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  templateUrl: 'layout.component.html',
})
export class LayoutComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatDrawer;

  // Public Component
  public navigating: boolean = false;

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.subscribeToNavigationEvents();
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
