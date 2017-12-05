import { IEmployee } from './../employee.interface';
import { UserService } from './../user.service';
import { IUserLogged } from './../user-logged.interface';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // @Input() user: IUser;
  private _userLogged: IUserLogged;

  constructor(
    private userService: UserService
  ) {
    this._userLogged = {
      currentMatch: {
        active: false,
        currentMatch: '',
        email: '',
        firstName: '',
        lastName: '',
        location: -1,
        matchConfirmed: false,
        matches: {}
      },
      matches: []
    }
  }

  ngOnInit() {
    this.userService.getUserInfo('-KgOv-CH56cFUVSH2TrK').subscribe(userLogged => {
      this._userLogged = userLogged;
    });
  }

  selectMatch(match: IEmployee): void {
    this.userService.matchSelected = match;
  }

  get userLogged(): IUserLogged {
    return this._userLogged;
  }
}
