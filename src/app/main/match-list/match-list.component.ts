import { Router } from '@angular/router';
import { IEmployee } from '../../employee.interface';
import { UserService } from '../../user.service';
import { IUserLogged } from '../../user-logged.interface';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

  // @Input() user: IUser;
  private _userLogged: IUserLogged;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this._userLogged = {
      currentMatch: this.userService.emptyEmployee,
      matches: []
    }
  }

  ngOnInit() {
    if (this.userService.userLoggedId) {
      this.userService.getUserInfo(this.userService.userLoggedId).subscribe(userLogged => {
        this._userLogged = userLogged;
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  selectMatch(match: IEmployee): void {
    this.userService.matchSelected = match;
  }

  get userLogged(): IUserLogged {
    return this._userLogged;
  }
}
