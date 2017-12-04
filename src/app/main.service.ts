import { IUser } from './user.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {

  url = 'https://shared-lunch.firebaseio.com/users/';
  private _userLogged: IUser;

  constructor(
    private http: HttpClient
  ) {
    this._userLogged = {
      active: true,
      currentMatch: '',
      email: '',
      firstName: '',
      lastName: '',
      location: -1,
      matchConfirmed: false,
      matches: {}
    }
  }

  getUserInfo(id: string): Observable<any> {
    return this.http.get(this.url + id + '.json');
  }

  get userLogged(): IUser {
    return this._userLogged;
  }

  set userLogged(user: IUser) {
    this._userLogged = user;
  }
}
