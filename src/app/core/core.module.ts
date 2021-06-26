import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AuthService } from './services/auth.service';
import { BaseService } from './services/base.service';
import { NavigationService } from './services/navigation.service';
import { UserService } from './services/user.service';

const Providers = [NavigationService, AuthService, BaseService, UserService];

@NgModule({
  imports: [HttpClientModule],
  exports: [],
  providers: Providers,
})
export class CoreModule {}
