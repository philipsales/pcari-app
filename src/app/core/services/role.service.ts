import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { AuthHttp } from 'angular2-jwt';

import { Role }           from '../models';
import { RoleJSON }       from '../interfaces';
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
	    console.log(response.json())
            return response.json().map(Role.fromJSON);
        });
    }//--getAll

    create(role: Role): Observable<Role> {
	console.log(role);
	const url = environment.API_ENDPOINT + '/roles/';
	let role_json = JSON.stringify(role);
	console.log(role_json);
	let headers = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: headers });
	return this.http.post(url, role_json, options)
            .map((response: Response) => {
		return Role.fromJSON(response.json());
            })
            .catch((error: Response | any) => {
		console.error(error, 'ERROR : role.service');
		let errMsg: string;
		if (error instanceof Response) {
		    const body = error.json() || '';
		    const err = body.error || JSON.stringify(body);
		    const status_code = err.status_code;
		    const err_array = err.errors || JSON.stringify(err);
		    console.error(err_array, 'err_array : ERROR : role.service');
		    console.error(status_code, 'status_code : ERROR : role.service');
		    errMsg = err_array;
		} else {
		    errMsg = error.message ? error.message : error.toString();
		}
		return Observable.throw(errMsg);
            });
    }//--create
}
