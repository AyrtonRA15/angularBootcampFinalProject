import { IEmployee } from './../../employee.interface';
import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {

  match: IEmployee;
  detail: string;
  hobbies: string[];

  constructor(
    private userService: UserService
  ) {
    this.detail = userService.detail;
    this.hobbies = userService.hobbies;
    this.match = userService.matchSelected;
  }

  ngOnInit() { }

}
