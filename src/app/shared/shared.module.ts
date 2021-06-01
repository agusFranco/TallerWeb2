import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoaderComponent } from './component/loader/loader.component';
import { ExampleDirective } from './directives/example-directive';

@NgModule({
  declarations: [ExampleDirective, LoaderComponent],
  imports: [FlexLayoutModule],
  exports: [FlexLayoutModule, LoaderComponent, ExampleDirective],
  providers: [],
})
export class SharedModule {}
