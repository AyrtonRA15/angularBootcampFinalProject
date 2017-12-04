import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    //     path: '', redirectTo: 'home', pathMatch: 'full'
    // }, {
    //     path: 'home/:id', component: HomeComponent
    // }, {
    //     path: 'home', component: HomeComponent
    // }, {
    //     path: 'login', loadChildren: 'app/login/login.module#LoginModule'
    // }, {
    //     path: 'signup', component: SignupComponent
    // }, {
    //     path: '**', component: Error404Component
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
