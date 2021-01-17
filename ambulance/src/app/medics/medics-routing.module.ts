import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMedicsComponent } from './presentation/pages/page-medics/page-medics.component';

const routes: Routes = [{ path: '', component: PageMedicsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicsRoutingModule {}
