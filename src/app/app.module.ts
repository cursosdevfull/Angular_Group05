import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { ItemComponent } from './item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { IconService } from './shared/services/icon.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Paginator } from './shared/classes/paginator';
import { ConfigModule } from './config/config.module';
import { AMB_Config } from './config/info';
import { AbstractStorage } from './shared/services/abstract-storage';
import { StorageService } from './shared/services/storage.service';
import { TokenInterceptor } from './shared/services/token.interceptor';
import { AuthenticationGuard } from './shared/guards/authentication.guard';
import { ExportService } from './shared/services/export.service';
import { ExportRepository } from './shared/infraestructure/export.repository';

@NgModule({
  declarations: [AppComponent, LoginComponent, ItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    ConfigModule.forRoot(AMB_Config),
  ],
  providers: [
    AuthenticationGuard,
    { provide: MatPaginatorIntl, useClass: Paginator },
    { provide: AbstractStorage, useClass: StorageService },
    { provide: ExportRepository, useClass: ExportService },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private readonly iconService: IconService) {}
}
