import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: '[exampleDirective]' })
export class ExampleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'Example');
  }
}
