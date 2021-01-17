import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDashboardComponent } from './presentation/pages/page-dashboard/page-dashboard.component';

const routes: Routes = [{ path: '', component: PageDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
