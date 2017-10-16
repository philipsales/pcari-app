import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { AuthHttp } from 'angular2-jwt';

import { Helper }         from '../helper';
import { User }           from '../models';
import { UserJSON }       from '../interfaces';
import { environment }    from 'environments/environment';

@Injectable()
export class UserService {

    constructor(
	private http: Http,
	public authHttp: AuthHttp) {
    }//--constructor

    getAll(): Observable<User[]> {
	const url = environment.API_ENDPOINT + '/users-via-email/';
	return this.http.get(url).map((response: Response) => {
            return response.json().map(User.fromJSON);
        });
    }//--getAll


    create(user: User): Observable<User> {
	console.log(user);
	const url = environment.API_ENDPOINT + '/users-via-email/';
	let user_json = JSON.stringify(user);
	console.log(user_json);
	let headers = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: headers });
	return this.http.post(url, user_json, options)
            .map((response: Response) => {
		return User.fromJSON(response.json());
            })
            .catch(Helper.handleError);
    }//--create    
}
