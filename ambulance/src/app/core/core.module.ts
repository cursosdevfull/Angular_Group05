import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './presentation/views/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './presentation/views/menu/menu.component';
import { MatListModule } from '@angular/material/list';
import { PageLoginComponent } from './presentation/pages/page-login/page-login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, MenuComponent, PageLoginComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
  ],
  exports: [HeaderComponent, MenuComponent, PageLoginComponent],
})
export class CoreModule {}
