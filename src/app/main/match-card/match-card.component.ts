import { IUser } from './../../user.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.css']
})
export class MatchCardComponent implements OnInit {

  @Input() match: IUser;

  constructor() { }

  ngOnInit() {
  }

}
