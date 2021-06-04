import { Component, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  templateUrl: 'layout.component.html',
})
export class LayoutComponent implements OnInit {
  // Public Component
  public navigating: boolean = false;

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.subscribeToNavigationEvents();
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
