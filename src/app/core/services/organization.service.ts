import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { AuthHttp } from 'angular2-jwt';

import { Helper }           from '../helper';
import { Organization }     from '../models';
import { OrganizationJSON } from '../interfaces';
import { environment }      from 'environments/environment';

@Injectable()
export class OrganizationService {

    constructor(
	private http: Http,
	public authHttp: AuthHttp) {
    }//--constructor

    getAll(): Observable<Organization[]> {
	const url = environment.API_ENDPOINT + '/organizations/';
	return this.http.get(url)
	    .map((response: Response) => {
		console.log(response.json())
		return response.json().map(Organization.fromJSON);
            })
	    .catch(Helper.handleError);
    }//--getAll

    getOrganizations(): Observable<Organization[]> {
      const url = environment.API_ENDPOINT + '/organizations/';
      return this.http
                 .get(url)
                 .map((response: Response) => {
                    return response.json().map(Organization.fromJSON);
                 })
                 .catch(Helper.handleError);
    }//--getAll

}
