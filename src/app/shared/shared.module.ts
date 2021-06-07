import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoaderComponent } from './component/loader/loader.component';
import { ExampleDirective } from './directives/example-directive';
import { PageContainerDirective } from './directives/page-container';

const Directives = [ExampleDirective, PageContainerDirective];
const Components = [LoaderComponent];

@NgModule({
  declarations: [Directives, Components],
  imports: [CommonModule, ReactiveFormsModule, FlexLayoutModule],
  exports: [FlexLayoutModule, ReactiveFormsModule, Directives, Components],
  providers: [],
})
export class SharedModule {}
