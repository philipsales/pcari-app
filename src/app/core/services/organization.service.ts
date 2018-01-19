import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Helper } from '../helper';
import { Organization } from '../models';
import { OrganizationJSON } from '../interfaces';
import { environment } from 'environments/environment';

@Injectable()
export class OrganizationService {

    constructor(private http: HttpClient) {
    }// --constructor

    getAll(): Observable<Organization[]> {
      const url = environment.API_ENDPOINT + 'organizations/';
      return this.http
                 .get(url)
                 .map((response: Response) => {
                    console.log(response['data'], 'OUTPUT GET /organizations');
                    return response['data'].map(Organization.fromJSON);
                 })
                 .catch(Helper.handleError);
    }// --getAll

}
