import { UserService } from './../../user.service';
import { IEmployee } from './../../employee.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.css']
})
export class MatchCardComponent implements OnInit {

  @Input() match: IEmployee;
  detail: string;

  constructor(
    private userService: UserService
  ) {
    this.detail = userService.detail;
  }

  ngOnInit() {
  }

}