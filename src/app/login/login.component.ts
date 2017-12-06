import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _userName: string;
  private _password: string;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this._userName = 'ayrton.rojo@gmail.com';
    this._password = 'ayrtonrojo15';
  }

  ngOnInit() {
  }

  login(): void {
    this.userService.userLoggedId = '-KgOv-CH56cFUVSH2TrK'; // Predefined user
    this.router.navigate(['/main']);
  }

  get userName(): string {
    return this._userName;
  }

  set userName(userName: string) {
    this._userName = userName;
  }

  get password(): string {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }

}
