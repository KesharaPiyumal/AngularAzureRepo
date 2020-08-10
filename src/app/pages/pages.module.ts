import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { StatsComponent } from './stats/stats.component';


@NgModule({
  declarations: [PagesComponent, DashboardComponent, StatsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule {
}
