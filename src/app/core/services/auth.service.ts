import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
// import { Observable } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { Helper } from '../helper';
import { CurrentUser } from '../models';
import { environment } from 'environments/environment';

@Injectable()
export class AuthService {
  public token: string;
  public current_user: CurrentUser;

  constructor(private http: Http) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }// --constructor

  login(username: string, password: string): Observable<any> {
      const url = environment.API_HOST + '/users/token';
      return this.http.post(url, { username: username, password: password }).map((response: Response) => {
            const token = response.json() && response.json().token;
            if (token) {
                this.token = token;
                const user = response.json() && response.json().current_user;
                this.current_user = <CurrentUser>user;

                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token, user: this.current_user }));
                localStorage.setItem('access_token', this.token);

                console.warn(this.current_user, 'LOGIN : auth.service.ts');
                console.warn(this.token, 'LOGIN : auth.service.ts');
                return {
                    status: true,
                    user: user,
                };
            } else {
                return {
                    status: false,
                    user: null,
                };
            }
      })
      .catch(Helper.handleError);
  }// --login
}
