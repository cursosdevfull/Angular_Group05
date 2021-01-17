import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDriversComponent } from './presentation/pages/page-drivers/page-drivers.component';

const routes: Routes = [{ path: '', component: PageDriversComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriversRoutingModule {}
