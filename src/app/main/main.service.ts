import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {

  url = 'https://shared-lunch.firebaseio.com/users/';

  constructor(
    private http: HttpClient
  ) { }

  getUserInfo(id: string): Observable<any> {
    return this.http.get(this.url + id + '.json');
  }

}
