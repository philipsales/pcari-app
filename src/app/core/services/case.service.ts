import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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
    const url = environment.API_ENDPOINT + 'cases/';
    return this.httpclient.get(url).map((response: Response) => {
      console.log(response['data'], 'OUTPUT GET /cases');
      return response['data'].map(Case.fromJSON);
    }).catch(Helper.handleError);
  }

  get(case_id: string): Observable<Case> {
    const url = environment.API_ENDPOINT + 'cases/' + case_id;
    return this.httpclient.get(url).map((response: CaseJSON) => {
      console.log(response, 'OUTPUT GET /cases');
      return Case.fromJSON(response);
    }).catch(Helper.handleError);
  }

  submitForm(mycase: CaseJSON): Observable<Case> {
    const url = environment.API_ENDPOINT + 'cases/';
    const form_json = JSON.stringify(mycase);
    console.log(form_json);

    return this.httpclient.post(url, mycase).map((response: CaseJSON) => {
      // return (response.json().data as Form[])
      console.log(response, 'CASE CREATED from /cases');
      return Case.fromJSON(response);
    })
    .catch(Helper.handleError);
  }
}
