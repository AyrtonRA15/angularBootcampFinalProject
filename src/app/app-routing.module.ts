import { MatchDetailComponent } from './main/match-detail/match-detail.component';
import { MainComponent } from './main/main.component';
import { Error404Component } from './error-404/error-404.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path: '', redirectTo: 'main', pathMatch: 'full'
}, {
    path: 'main', component: MainComponent
}, {
    path: 'match', component: MatchDetailComponent
}, {
    path: 'login', component: LoginComponent
}, {
    path: '**', component: Error404Component
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
