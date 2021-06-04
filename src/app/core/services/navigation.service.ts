import { EventEmitter, Injectable, Output } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';

import { PagePaths } from 'src/app/common/enums/pagepaths';

@Injectable()
export class NavigationService {
  @Output() onNavigationStart: EventEmitter<any> = new EventEmitter();
  @Output() onNavigationEnd: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscribeToRouterEvents();
  }

  public navigate(pagePath: PagePaths): Promise<boolean> {
    return this.router.navigate([pagePath]);
  }

  private subscribeToRouterEvents() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.onNavigationStart.emit();
      }

      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.onNavigationEnd.emit();
      }
    });
  }
}
