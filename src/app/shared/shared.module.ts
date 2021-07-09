import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { LoaderComponent } from './component/loader/loader.component';
import { PageHeaderComponent } from './component/page-header/pageheader.component';
import { ExampleDirective } from './directives/example-directive';
import { PageContainerDirective } from './directives/page-container';

const Directives = [ExampleDirective, PageContainerDirective];
const Components = [LoaderComponent, PageHeaderComponent];

@NgModule({
  declarations: [Directives, Components],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: [FlexLayoutModule, ReactiveFormsModule, Directives, Components],
  providers: [],
})
export class SharedModule {}
