import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIAddBaseUrlInterceptor } from './api-add-base-url.interceptor';
import { ApiErrorHandler } from './api-error-handler.interceptor';

@NgModule({
  declarations: [],
  imports: [

  ],
  exports: [],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIAddBaseUrlInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiErrorHandler,
      multi: true,
    },
  ],
})
export class ApiModule { }