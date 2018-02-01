import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Helper } from '../helper';
import { Case, FormAnswer } from '../models';
import { CaseJSON, FormAnswerJSON } from '../interfaces';
import { environment } from 'environments/environment';

@Injectable()
export class FormAnswerService {

  private caseUrl = environment.API_ENDPOINT + '/cases';

  constructor(private http: Http,
              private httpclient: HttpClient) {
  }// --constructor

  get(case_id: string, form_id: string): Observable<FormAnswer> {
    const url = environment.API_ENDPOINT + 'cases/' + case_id + '/forms/' + form_id;
    return this.httpclient.get(url).map((response: FormAnswerJSON) => {
      console.log(response, 'OUTPUT GET /cases/forms one');
      return FormAnswer.fromJSON(response);
    }).catch(Helper.handleError);
  }

  create(case_id: string, form_id: string, formanswer: FormAnswer): Observable<FormAnswer> {
    const url = environment.API_ENDPOINT + 'cases/' + case_id + '/forms/' + form_id;
    const formanswer_json = formanswer.toJSON();
    console.log(formanswer_json);

    return this.httpclient.post(url, formanswer_json)
      .map((response: FormAnswerJSON) => {
        // return (response.json().data as Form[])
        console.log(response, 'FORM CREATED from /cases');
        return FormAnswer.fromJSON(response);
    }).catch(Helper.handleError);
  }

  update(case_id: string, form_id: string, formanswer: FormAnswer): Observable<FormAnswer> {
    const url = environment.API_ENDPOINT + 'cases/' + case_id + '/forms/' + form_id;
    const formanswer_json = formanswer.toJSON();
    console.log(formanswer_json);

    return this.httpclient.patch(url, formanswer_json)
      .map((response: FormAnswerJSON) => {
        // return (response.json().data as Form[])
        console.log(response, 'CASE UPDATED from /cases');
        return FormAnswer.fromJSON(response);
    }).catch(Helper.handleError);
  }
}
