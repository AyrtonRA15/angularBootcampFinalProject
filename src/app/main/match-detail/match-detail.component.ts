import { IEmployee } from './../../employee.interface';
import { UserService } from './../../user.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {

  private _match: IEmployee;
  private _detail: string;
  private _hobbies: string[];
  private _rateMode: string; // 'read' or 'rate'
  private _rating: number; // 1 to 5
  private _ratingReadOnly: boolean;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this._detail = userService.detail;
    this._hobbies = userService.hobbies;
    this._match = userService.matchSelected;
  }

  ngOnInit() {
    if (!this._match.firstName) {
      this.router.navigate(['/main']);
    }
    this.route.paramMap.subscribe((params: ParamMap) => {
      this._rateMode = params.get('rateMode');
      switch (this._rateMode) {
        case 'rate':
          this._ratingReadOnly = false;
          this._rating = this.userService.ratingSelected;
          break;
        case 'read':
          this._ratingReadOnly = true;
          this._rating = this.userService.randomRating;
          break;
      }
    });
  }

  ngOnDestroy() {
    // Save rating selected
    if (this._rateMode === 'rate') {
      this.userService.ratingSelected = this.rating;
    }
  }

  get match(): IEmployee {
    return this._match;
  }

  get detail(): string {
    return this._detail;
  }

  get hobbies(): string[] {
    return this._hobbies;
  }

  get rating(): number {
    return this._rating;
  }

  set rating(rating: number) {
    this._rating = rating;
  }

  get ratingReadOnly(): boolean {
    return this._ratingReadOnly;
  }
}