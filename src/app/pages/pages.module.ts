import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {HttpClient} from '@angular/common/http';


@NgModule({
  declarations: [PagesComponent, DashboardComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule {
}
