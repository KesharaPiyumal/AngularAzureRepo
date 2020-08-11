import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthenticationGuard } from 'microsoft-adal-angular6';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'stats',
    component: StatsComponent,
    canActivate: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
