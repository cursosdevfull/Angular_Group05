import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLockScreenComponent } from './core/presentation/pages/page-lock-screen/page-lock-screen.component';
import { PageLoginComponent } from './core/presentation/pages/page-login/page-login.component';
import { AuthenticationGuard } from './shared/guards/authentication.guard';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', component: PageLoginComponent },
      {
        path: 'lock',
        canActivate: [AuthenticationGuard],
        component: PageLockScreenComponent,
      },
    ],
  },
  {
    path: 'dashboard',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'medics',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./medics/medics.module').then((m) => m.MedicsModule),
  },
  {
    path: 'users',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'drivers',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./drivers/drivers.module').then((m) => m.DriversModule),
  },
  {
    path: 'histories',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./histories/histories.module').then((m) => m.HistoriesModule),
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
