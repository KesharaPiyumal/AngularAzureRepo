import {Component} from '@angular/core';
import {MsAdalAngular6Service} from 'microsoft-adal-angular6';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menu = [
    {
      label: 'Home',
      value: '',
      id: 1,
      icon: 'fa-home'
    }, {
      label: 'Dashboard',
      value: 'dashboard',
      id: 2,
      icon: 'fa-chart-line'
    }, {
      label: 'Stats',
      value: 'stats',
      id: 3,
      icon: 'fa-chart-pie'
    }
  ];

  constructor(private adalService: MsAdalAngular6Service, public router: Router) {
  }

  logOut() {
    this.adalService.logout();
  }

  navigate(m: any) {
    this.router.navigate(['pages/' + m.value]).then(r => {
    });
  }
}
