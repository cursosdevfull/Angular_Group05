import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { ItemComponent } from './item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { IconService } from './shared/services/icon.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [AppComponent, LoginComponent, ItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private readonly iconService: IconService) {}
}
