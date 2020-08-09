import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {
  // baseUrl = 'http://localhost:1337/';
  baseUrl = 'https://yoursketchwebappservice.azurewebsites.net/';

  constructor(private http: HttpClient) {
  }

  getHttpHeaders() {
    return new HttpHeaders()
      .set('Content-Type', 'application/json');
  }


  getAll(subUrl: string) {
    return this.http.get<any>(this.baseUrl + subUrl, {headers: this.getHttpHeaders()}).pipe(
      map(response => {
        return response;
      }));
  }

  postData(subUrl: string, data: any) {
    return this.http.post<any>(this.baseUrl + subUrl, data, {headers: this.getHttpHeaders()}).pipe(
      map(response => {
        return response;
      }));
  }
}
