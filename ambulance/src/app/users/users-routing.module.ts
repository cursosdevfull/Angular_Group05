import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageUsersComponent } from './presentation/pages/page-users/page-users.component';

const routes: Routes = [{ path: '', component: PageUsersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
