import { IUser } from './user.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatMapTo';
import 'rxjs/add/operator/withLatestFrom';

@Injectable()
export class MainService {

  url = 'https://shared-lunch.firebaseio.com/users.json';
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
    return this.http.get(this.url)
      .map(employees => {
        let user = employees[id];
        let resultMatches = [];
        for (const matchId in user.matches) {
          resultMatches.push(employees[matchId]);
        }
        return {
          user: user,
          currentMatch: employees[user.currentMatch],
          matches: resultMatches
        }
      });
  }

  get userLogged(): IUser {
    return this._userLogged;
  }

  set userLogged(user: IUser) {
    this._userLogged = user;
  }
}
