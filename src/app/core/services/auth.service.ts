import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
//import { Observable } from 'rxjs';
import { Observable } from 'rxjs/Observable';
//import { map, catch } from 'rxjs/operators';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

//import { AuthHttp } from 'angular2-jwt';

import { Helper }         from '../helper';
import { CurrentUser }    from '../models';
import { environment }    from 'environments/environment';

@Injectable()
export class AuthService {
  public token: string;    
  public current_user: CurrentUser;

  constructor(private http: Http
  // public authHttp: AuthHttp
  ) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }//--constructor

  login(username: string, password: string): Observable<any> {
      const url = environment.API_HOST + '/api-token-auth/';
      return this.http.post(url,
			    { username: username, password: password })
	  .map((response: Response) => {
	      // login successful if there's a jwt token in the response
              const token = response.json() && response.json().token;
              if (token) {
		  // set token property
		  this.token = token;

		  const user = response.json() && response.json().current_user;
		  this.current_user = <CurrentUser>user;

		  // store username and jwt token in local storage to keep user logged in between page refreshes
		  localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token, user: this.current_user }));

		  console.warn(this.current_user);
		  return {
		      status: true,
		      user: user,
		  };
              } else {
		  // return false to indicate failed login
		  return {
		      status: false,
		      user: null,
		  }
              }
	  })
	  .catch(Helper.handleError);
  }//--login
}
