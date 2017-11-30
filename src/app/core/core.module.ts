import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PaginationModule } from 'ngx-bootstrap';

import { StorageService } from './storage/storage.service';
import { environment } from '../../environments/environment';

// Translate options
export function translateFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/');
}
@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateFactory,
        deps: [HttpClient]
      }
    }),
    PaginationModule.forRoot()
  ],
  declarations: [],
  exports: [
    TranslateModule,
    PaginationModule
  ],
  providers: [
    StorageService
  ]
})
export class CoreModule {
  constructor(translateService: TranslateService,
    storageService: StorageService) {

    // Get locale in locale storage
    const locale = storageService.getItem<string>(environment.language.key) || environment.language.default;

    // use fr language in application
    translateService.use(locale);
  }
}
