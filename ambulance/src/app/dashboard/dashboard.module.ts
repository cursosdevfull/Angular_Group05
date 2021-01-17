import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PageDashboardComponent } from './presentation/pages/page-dashboard/page-dashboard.component';
@NgModule({
  declarations: [PageDashboardComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
