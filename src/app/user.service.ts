import { IEmployee } from './employee.interface';
import { IUserLogged } from './user-logged.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatMapTo';
import 'rxjs/add/operator/withLatestFrom';

@Injectable()
export class UserService {

  private _url = 'https://shared-lunch.firebaseio.com/users.json';
  private _matchselected: IEmployee;
  // Fake Info
  private _detail: string;
  private _hobbies: string[];
  private _ratingSelected: number;

  constructor(
    private http: HttpClient
  ) {
    this._detail = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet odio tincidunt, dignissim felis vel, accumsan risus.';
    this._hobbies = ['Comics', 'Series', 'Futbol', 'Novelas'];
    this._matchselected = this.emptyEmployee;
  }

  getUserInfo(id: string): Observable<IUserLogged> {
    return this.http.get(this._url)
      .map(employees => {
        let user: IEmployee = employees[id];
        let resultMatches = [];
        for (const matchId in user.matches) {
          resultMatches.push(employees[matchId]);
        }
        return {
          currentMatch: employees[user.currentMatch],
          matches: resultMatches
        }
      });
  }

  get matchSelected(): IEmployee {
    return this._matchselected;
  }

  set matchSelected(match: IEmployee) {
    this._matchselected = match;
  }

  get emptyEmployee(): IEmployee {
    return {
      active: false,
      currentMatch: '',
      email: '',
      firstName: '',
      lastName: '',
      location: null,
      matchConfirmed: false,
      matches: {},
    }
  }

  // Fake Info
  get detail(): string {
    return this._detail;
  }

  get hobbies(): string[] {
    return this._hobbies;
  }

  get ratingSelected(): number {
    return this._ratingSelected;
  }

  set ratingSelected(rating: number) {
    this._ratingSelected = rating;
  }

  get randomRating(): number {
    return Math.floor((Math.random() * 5) + 1);
  }

}
