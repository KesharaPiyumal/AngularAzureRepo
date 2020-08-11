import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loading = false;
  cols = [{ label: '#' }, { label: 'First Name' }, { label: 'Last Name' }, { label: 'Age' }];
  rows = [];
  imageFile: any;
  msg;

  constructor(private pagesService: PagesService) {}

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons() {
    this.loading = true;
    this.pagesService.getAllPersons().subscribe(
      response => {
        this.loading = false;
        if (response.statusCode === 200) {
          this.rows = response.data;
        }
      },
      error => {
        this.loading = false;
      }
    );
  }

  uploadFile(event: Event) {
    this.imageFile = event.target['files'][0];
    this.uploadImage();
  }

  uploadImage() {
    // const formData: FormData = new FormData();
    // formData.append('file', this.imageFile);
    this.loading = true;
    this.pagesService.uploadImage().subscribe(
      response => {
        this.loading = false;
        if (response) {
          this.msg = response.data;
          setTimeout(() => {
            this.msg = null;
          }, 3500);
        }
      },
      error => {
        this.loading = false;
      }
    );
  }
}
