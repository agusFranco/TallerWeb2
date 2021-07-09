import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: 'pageheader.component.html',
})
export class PageHeaderComponent implements OnInit {
  @Input('text') text!: string;
  @Input('icon') icon!: string;
  constructor() {}
  ngOnInit() {}
}
