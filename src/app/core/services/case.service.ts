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
      console.log(response['data'], 'OUTPUT GET /cases all');
      return response['data'].map(Case.fromJSON);
    }).catch(Helper.handleError);
  }

  getMedicalCases(): Observable<Case[]> {
    const url = environment.API_ENDPOINT + 'cases/';
    const medical_org = environment.ORG_MEDICAL;
    return this.httpclient.get(url).map((response: Response) => {
      console.log(response['data'], 'OUTPUT GET /cases all');
      return response['data'].filter((all_cases: CaseJSON) => {
        return all_cases.organization === medical_org;
      }).map(Case.fromJSON);
    }).catch(Helper.handleError);
  }

  getBiobankCases(): Observable<Case[]> {
    const url = environment.API_ENDPOINT + 'cases/';
    const biobank_org = environment.ORG_BIOBANK;
    return this.httpclient.get(url).map((response: Response) => {
      console.log(response['data'], 'OUTPUT GET /cases all');
      return response['data'].filter((all_cases: CaseJSON) => {
        return all_cases.organization === biobank_org;
      }).map(Case.fromJSON);
    }).catch(Helper.handleError);
  }

  getMedicalCaseNumbers(): Observable<string[]> {
    const url = environment.API_ENDPOINT + 'cases/';
    const medical_org = environment.ORG_MEDICAL;
    return this.httpclient.get(url).map((response: Response) => {
      console.log(response['data'], 'OUTPUT GET /cases all');
      return response['data'].filter((all_cases: CaseJSON) => {
        return all_cases.organization === medical_org;
      }).map((x) => {
        console.log(x);
        return x['case_number'];
      });
    }).catch(Helper.handleError);
  }


  get(case_id: string): Observable<Case> {
    const url = environment.API_ENDPOINT + 'cases/' + case_id;
    return this.httpclient.get(url).map((response: CaseJSON) => {
      console.log(response, 'OUTPUT GET /cases one');
      return Case.fromJSON(response);
    }).catch(Helper.handleError);
  }

  create(mycase: Case): Observable<Case> {
    const url = environment.API_ENDPOINT + 'cases/';
    const case_json = mycase.toJSON();
    console.log(case_json);

    return this.httpclient.post(url, case_json)
      .map((response: CaseJSON) => {
        // return (response.json().data as Form[])
        console.log(response, 'CASE CREATED from /cases');
        return Case.fromJSON(response);
      }).catch(Helper.handleError);
  }

  update(mycase: Case): Observable<Case> {
    const url = environment.API_ENDPOINT + 'cases/' + mycase.id;
    const case_json = mycase.toJSON();
    console.log(case_json);

    return this.httpclient.patch(url, case_json)
      .map((response: CaseJSON) => {
        // return (response.json().data as Form[])
        console.log(response, 'CASE UPDATED from /cases');
        return Case.fromJSON(response);
      }).catch(Helper.handleError);
  }

  upload(dir_path: string): Observable<any> {
    const url = environment.API_ENDPOINT + 'cases/upload';

    console.log(url);
    console.log(dir_path);
    var body = { 'dir_path': dir_path };

    var headers = { 'Content-Disposition': 'multipart/form-data' };

    return this.httpclient.post(url, body)
      .map((response: Response) => {
        console.log('RESPONSE: ', response);
        return response;
      }).catch(Helper.handleError);
  }
}
