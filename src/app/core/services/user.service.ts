import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, catch } from 'rxjs/operators';

//import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';

import { Helper } from '../helper';
import { User } from '../models';
import { UserJSON } from '../interfaces';
import { environment } from 'environments/environment';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {
    }// --constructor

    getAll(): Observable<User[]> {
        const url = environment.API_ENDPOINT + 'users/';
        return this.http.get(url).map((response: Response) => {
            console.log(response['data'], 'OUTPUT GET /users');
            return response['data'].map(User.fromJSON);
        })
        .catch(Helper.handleError);
    }// --getAll


    create(user: User): Observable<User> {
	console.log(user);
	const url = environment.API_ENDPOINT + '/users-via-email/';
	let user_json = JSON.stringify(user);
	console.log(user_json);
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  //let options = new RequestOptions({ headers: headers });
  //return this.authHttp
  return this.http
            .post(url, user_json,headers)
            .map((response: Response) => {
		return User.fromJSON(response.json());
            })
            .catch(Helper.handleError);
    }//--create    
}
