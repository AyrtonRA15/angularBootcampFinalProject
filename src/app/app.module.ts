import { UserService } from './user.service';
import { AppRoutingModule } from './app-routing.module';
import { MatchDetailComponent } from './main/match-detail/match-detail.component';
import { MatchCardComponent } from './main/match-list/match-card/match-card.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { MaterialBundleModule } from './material-bundle/material-bundle.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingModule } from "ngx-rating";

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { Error404Component } from './error-404/error-404.component';
import { MatchListComponent } from './main/match-list/match-list.component';
import { MainToolbarComponent } from './main/main-toolbar/main-toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MatchCardComponent,
    MatchDetailComponent,
    Error404Component,
    MatchListComponent,
    MainToolbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialBundleModule,
    AppRoutingModule,
    RatingModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
