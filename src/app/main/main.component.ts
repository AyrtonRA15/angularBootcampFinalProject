import { Observable } from 'rxjs/Observable';
import { MainService } from './../main.service';
import { IUser } from './../user.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // @Input() user: IUser;
  private _user: IUser;
  private _currentMatch: IUser;
  private _matches: IUser[];

  constructor(
    private mainService: MainService
  ) {
    this._user = {
      active: true,
      currentMatch: '',
      email: '',
      firstName: '',
      lastName: '',
      location: -1,
      matchConfirmed: false,
      matches: {}
    };
    this._matches = [];
  }

  ngOnInit() {
    this.mainService.getUserInfo('-KgOv-CH56cFUVSH2TrK').subscribe(user => {
      this._user = user;

      this.mainService.getUserInfo(user.currentMatch).subscribe(cMatch => this._currentMatch = cMatch);

      for (const userId in user.matches) {
        this.mainService.getUserInfo(userId).subscribe(match => this._matches.push(match));
      }

    });
  }

  getCurrentMatch

  get user(): IUser {
    return this._user;
  }

  get currentMatch(): IUser {
    return this._currentMatch;
  }

  get matches(): IUser[] {
    return this._matches;
  }
}
