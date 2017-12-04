import { IUser } from './../../user.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.css']
})
export class MatchCardComponent implements OnInit {

  @Input() match: IUser;
  private _detail: string;

  constructor() {
    this._detail = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet odio tincidunt, dignissim felis vel, accumsan risus.';
  }

  ngOnInit() {
  }

  get detail(): string {
    return this._detail;
  }

}
