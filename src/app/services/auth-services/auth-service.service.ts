import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthServiceService {
  userLoggedIn = false;

  constructor() { 

  }

  public login(){
    /*return this.http.post<any>('/api/authenticate', { username: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                }
          return user;
    });*/
    this.userLoggedIn = true;
  }

  public isAuthorized(){
    return this.userLoggedIn;
  }
}
