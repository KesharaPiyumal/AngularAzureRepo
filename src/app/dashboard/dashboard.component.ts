import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {PagesService} from '../pages/pages.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loading = false;
  cols = [{
    label: '#'
  }, {
    label: 'First Name'
  }, {
    label: 'Last Name'
  }, {
    label: 'Age'
  }];
  rows = [];

  constructor(private pagesService: PagesService) {
  }

  ngOnInit(): void {
  }

  getPersons() {
    this.loading = true;
    this.pagesService.getAllPersons().subscribe(response => {
      this.loading = false;
      if (response.statusCode === 200) {
        this.rows = response.data;
      }
    }, error => {
      this.loading = false;
    });
  }
}
