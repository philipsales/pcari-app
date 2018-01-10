import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { Observable } from 'rxjs/Observable';
//import { map, catch } from 'rxjs/operators';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
//import { AuthHttp } from 'angular2-jwt';

import { Helper } from '../helper';
import { Case } from '../models';
import { CaseJSON } from '../interfaces';
import { environment } from 'environments/environment';

@Injectable()
export class CaseService {

  private apiV1 = 'v1';
  private caseUrl = environment.API_ENDPOINT + '/cases'; 

  constructor(private http: Http,
              private httpclient: HttpClient) {
  }// --constructor

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

  submitForm(mycase: CaseJSON): Observable<Case> {
    const url = environment.API_ENDPOINT + 'cases/';
    const form_json = JSON.stringify(mycase);
    console.log(form_json);

    return this.httpclient.post(url, mycase).map((response: CaseJSON) => {
      // return (response.json().data as Form[])
      console.log(response, 'CASE CREATED from /forms');
      return Case.fromJSON(response);
    })
    .catch(Helper.handleError);
  }
}
