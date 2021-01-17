import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHistoryComponent } from './presentation/pages/page-history/page-history.component';
import { HistoriesRoutingModule } from './histories-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageHistoryComponent],
  imports: [CommonModule, HistoriesRoutingModule, SharedModule],
})
export class HistoriesModule {}
