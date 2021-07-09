import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { HeaderInterceptor } from './interceptor/header.interceptor';
import { AuthService } from './services/auth.service';
import { BaseService } from './services/base.service';
import { NavigationService } from './services/navigation.service';
import { NotificationService } from './services/notification.service';
import { ProductService } from './services/products.service';
import { UserService } from './services/user.service';

const Providers = [
  NavigationService,
  AuthService,
  BaseService,
  UserService,
  ProductService,
  NotificationService,
];

const Interceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptor,
    multi: true,
  },
];

@NgModule({
  imports: [HttpClientModule],
  exports: [],
  providers: [Providers, Interceptors],
})
export class CoreModule {}
