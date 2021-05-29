import { NgModule } from '@angular/core';
import { ExampleDirective } from './directives/example-directive';

@NgModule({
  declarations: [ExampleDirective],
  imports: [],
  exports: [ExampleDirective],
  providers: [],
})
export class SharedModule {}
