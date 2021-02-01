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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PageLockScreenComponent } from './presentation/pages/page-lock-screen/page-lock-screen.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    PageLoginComponent,
    PageLockScreenComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    RouterModule,
  ],
  exports: [HeaderComponent, MenuComponent, PageLoginComponent],
})
export class CoreModule {}
