import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent {
  @Output() onLoginClick: EventEmitter<any> = new EventEmitter();
  @Output() onCloseSideBar: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public handleLoginClick(): void {
    this.onLoginClick.emit();
    this.onCloseSideBar.emit();
  }
}
