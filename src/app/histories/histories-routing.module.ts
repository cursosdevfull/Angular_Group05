import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHistoryComponent } from './presentation/pages/page-history/page-history.component';

const routes: Routes = [{ path: '', component: PageHistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriesRoutingModule {}
