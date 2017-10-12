import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { AuthHttp } from 'angular2-jwt';

import { User }           from 'app/core/models';
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
            return <User[]>response.json();
        });
    }//--getAll

    
}
