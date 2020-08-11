import {Injectable} from '@angular/core';
import {CommonHttpService} from '../@common/common-http.service';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(public commonHttpService: CommonHttpService, private httpClient: HttpClient) {
  }

  getAllPersons() {
    return this.commonHttpService.getAll('persons').pipe(
      map(data => {
        return data;
      })
    );
  }
  uploadImage() {
    return this.commonHttpService.getAllFunc('uploadFile').pipe(
      map(data => {
        return data;
      })
    );
  }
}
