import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { AuthHttp } from 'angular2-jwt';

import { Helper }         from '../helper';
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
      return this.http.get(url)
                 .map((response: Response) => {
                   console.log(response.json())
                   return response.json().map(Role.fromJSON);
                 })
                 .catch(Helper.handleError);
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
            .catch(Helper.handleError);
    }//--create
}
