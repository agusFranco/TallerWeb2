import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { NavigationService } from './services/navigation.service';

@NgModule({
  imports: [HttpClientModule],
  exports: [],
  providers: [NavigationService],
})
export class CoreModule {}
