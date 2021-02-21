import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TitleComponent } from './components/title/title.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainterListComponent } from './components/containter-list/containter-list.component';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PhotoComponent } from './components/photo/photo.component';
import { UploadDirective } from './directives/upload.directive';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { WebcamModule } from 'ngx-webcam';
import { RolesAllowedDirective } from './directives/roles-allowed.directive';
import { ConfirmComponent } from './components/confirm/confirm.component';
@NgModule({
  declarations: [
    TitleComponent,
    ContainterListComponent,
    TableComponent,
    PhotoComponent,
    UploadDirective,
    RolesAllowedDirective,
    ConfirmComponent,
  ],
  imports: [
    MatButtonModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    WebcamModule,
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatToolbarModule,
    TitleComponent,
    ContainterListComponent,
    TableComponent,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    PhotoComponent,
    RolesAllowedDirective,
  ],
})
export class SharedModule {}
