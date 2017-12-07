import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { AuthHttp } from 'angular2-jwt';

import { Helper }         from '../helper';
import { Case }           from '../models';
import { environment }    from 'environments/environment';

@Injectable()
export class CaseService {

  private apiV1 = 'v1';
  private caseUrl = environment.API_ENDPOINT + '/cases'; 

  constructor(private http: Http) {
  }//--constructor

  getAll(): Observable<Case[]> {
    const url = environment.API_ENDPOINT + '/cases/';

    console.log("--OnInit--Case.Service--");

    return this.http.get(url)
                 .map((response: Response) => {
                    console.log("--response.json--")
                    console.log(response.json().data as Case[])
                    return (response.json().data as Case[])
                 })
                 .catch(Helper.handleError);
  }

}
