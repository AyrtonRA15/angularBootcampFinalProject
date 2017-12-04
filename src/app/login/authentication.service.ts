import { IUser } from './../user.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  // users: IUser[];

  constructor(
    // private _router: Router
  ) {
    // this.users = [{
    //   email: 'ayrton.rojo',
    //   password: 'ayrton2017'
    // }];
  }

  // logout() {
  //   // localStorage.removeItem("user");
  //   this._router.navigate(['Login']);
  // }

  // login(user: IUser): boolean {
  //   let authenticatedUser = this.users.find(u => u.email === user.email);
  //   if (authenticatedUser && authenticatedUser.password === user.password) {
  //     // localStorage.setItem("user", authenticatedUser);
  //     this._router.navigate(['Home']);
  //     return true;
  //   }
  //   return false;
  // }

}
