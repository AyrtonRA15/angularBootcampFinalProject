import { UserService } from '../../../user.service';
import { IEmployee } from '../../../employee.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.css']
})
export class MatchCardComponent implements OnInit {

  @Input() match: IEmployee;
  private _detail: string;

  constructor(
    private userService: UserService
  ) {
    this._detail = userService.detail;
  }

  ngOnInit() {
  }

  get detail(): string {
    return this._detail;
  }

}