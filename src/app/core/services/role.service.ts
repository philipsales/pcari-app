import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { Http, Headers, RequestOptions, Response } from '@angular/http';
// import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Helper } from '../helper';
import { Role } from '../models';
import { RoleJSON } from '../interfaces';
import { environment } from 'environments/environment';

@Injectable()
export class RoleService {

    constructor(private http: HttpClient) {
    }// --constructor

    getAll(): Observable<Role[]> {
      const url = environment.API_ENDPOINT + 'roles/';
      console.log('url: ', url);
      return this.http.get(url)
                 .map((response: Response) => {
                   console.log(response['data']);
                   console.log(response);
                   return response['data'].map(Role.fromJSON);
                 })
                 .catch(Helper.handleError);
    }// --getAll

    get(role_id: string): Observable<Role> {
      const url = environment.API_ENDPOINT + 'roles/' + role_id;
      return this.http.get(url).map((response: RoleJSON) => {
        console.log(response, 'OUTPUT GET /roles');
        return Role.fromJSON(response);
      }).catch(Helper.handleError);
    }

    create(role: Role): Observable<Role> {
      console.log(role);
      const url = environment.API_ENDPOINT + 'roles/';
      const role_json = role.toJSON();
      console.log(role_json);
      return this.http.post(url, role_json)
              .map((response: RoleJSON) => {
                console.log(response);
                return Role.fromJSON(response);
              })
              .catch(Helper.handleError);
      }// --create
}
