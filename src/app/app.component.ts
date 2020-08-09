import {Component} from '@angular/core';
import {MsAdalAngular6Service} from 'microsoft-adal-angular6';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menu = [
    {
      label: 'Dashboard',
      id: 1,
      icon: 'fa-chart-line'
    }, {
      label: 'Works',
      id: 2,
      icon: 'fa-calendar'
    }, {
      label: 'Stats',
      id: 3,
      icon: 'fa-chart-pie'
    }
  ];

  constructor(private adalService: MsAdalAngular6Service) {
  }

  logOut() {
    this.adalService.logout();
  }
}
