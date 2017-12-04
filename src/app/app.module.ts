import { MainService } from './main.service';
import { MatchDetailComponent } from './main/match-detail/match-detail.component';
import { MatchCardComponent } from './main/match-card/match-card.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { MaterialBundleModule } from './material-bundle/material-bundle.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MatchCardComponent,
    MatchDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialBundleModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
