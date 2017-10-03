import { ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, BaseRequestOptions, RequestOptions } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MockBackend } from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './app/core/core.module';
import { StorageService } from './app/core/storage/storage.service';
import { LayoutModule } from './app/layout/layout.module';

import { environment } from './environments/environment';

/**
 * Define the common testing imports module.
 */
export const TESTING_IMPORTS = [
  RouterTestingModule,
  CommonModule,
  BrowserAnimationsModule,
  CoreModule,
  HttpClientModule,
  LayoutModule,
  TranslateModule.forRoot(),
];

/**
 * Define the common testing providers
 */
export const TESTING_PROVIDERS = [
  MockBackend,
  BaseRequestOptions,
  StorageService,
  {
    provide: Http,
    useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
      return new Http(backend, defaultOptions);
    },
    deps: [MockBackend, BaseRequestOptions]
  },
  {
    provide: TranslateLoader,
    useFactory: (http: HttpClient) => new TranslateHttpLoader(http, 'assets/i18n/', '.json'),
    deps: [Http]
  }
];
