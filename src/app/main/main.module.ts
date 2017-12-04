import { MaterialBundleModule } from './../material-bundle/material-bundle.module';
import { MainService } from './main.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HttpClientModule } from '@angular/common/http';
import { MatchCardComponent } from './match-card/match-card.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialBundleModule
  ],
  declarations: [
    MainComponent,
    MatchCardComponent,
    MatchDetailComponent
  ],
  exports: [
    MainComponent
  ],
  providers: [MainService]
})
export class MainModule { }
