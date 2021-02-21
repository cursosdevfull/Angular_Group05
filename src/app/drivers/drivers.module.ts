import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDriversComponent } from './presentation/pages/page-drivers/page-drivers.component';
import { DriversRoutingModule } from './drivers-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageDriversComponent],
  imports: [CommonModule, DriversRoutingModule, SharedModule],
})
export class DriversModule {}
