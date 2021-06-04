import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: '[pageContainer]' })
export class PageContainerDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'app-page-container');
  }
}
