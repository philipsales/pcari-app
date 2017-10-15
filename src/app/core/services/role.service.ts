import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { AuthHttp } from 'angular2-jwt';

import { Role }           from '../models';
import { environment }    from 'environments/environment';

@Injectable()
export class RoleService {

    constructor(
	private http: Http,
	public authHttp: AuthHttp) {
    }//--constructor

    getAll(): Observable<Role[]> {
	const url = environment.API_ENDPOINT + '/roles/';
	return this.http.get(url).map((response: Response) => {
            return <Role[]>response.json();
        });
    }//--getAll

}
