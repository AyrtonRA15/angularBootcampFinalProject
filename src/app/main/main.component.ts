import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.userService.userLoggedId) {
      this.router.navigate(['/login']);
    }
  }
}
