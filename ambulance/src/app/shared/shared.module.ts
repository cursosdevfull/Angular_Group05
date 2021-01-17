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
@NgModule({
  declarations: [TitleComponent, ContainterListComponent, TableComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
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
  ],
})
export class SharedModule {}
