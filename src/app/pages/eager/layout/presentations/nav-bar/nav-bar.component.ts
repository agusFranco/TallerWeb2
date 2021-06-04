import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: 'nav-bar.component.html',
})
export class NavBarComponent implements OnInit {
  @Output() onSideNavClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public handleSideNavClick(): void {
    this.onSideNavClick.emit();
  }
}
