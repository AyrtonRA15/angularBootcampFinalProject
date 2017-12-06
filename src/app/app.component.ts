import { UserService } from './user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private userService: UserService
  ) { }

  logout(): void {
    this.userService.userLoggedId = null;
  }

  get isLogged(): boolean {
    return !this.userService.userLoggedId;
  }
}
