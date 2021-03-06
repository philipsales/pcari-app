import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response } from '@angular/http';

import { HttpClient } from '@angular/common/http';

//import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

import { Helper } from '../helper';
import { Consent } from '../models';
import { ConsentJSON } from '../interfaces';
import { environment } from 'environments/environment';

@Injectable()
export class ConsentService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private consentUrlVersion = 'v1';
  private consentUrl = environment.API_ENDPOINT + 'consents';

  constructor(private http: HttpClient) {
  }//--constructor

  create(consent: Consent): Observable<Consent> {
    const url = environment.API_ENDPOINT + `consents/`;
    const consent_json = consent;

    return this.http
      .post(url, consent_json)
      .map((response: ConsentJSON) => {
        console.log(response);
        return Consent.fromJSON(response);
      })
      .catch(Helper.handleError);
  }

  getConsents(): Observable<Consent[]> {
    const url = environment.API_ENDPOINT + 'consents/';

    return this.http
      .get(url)
      .map((response: Response) => {
        console.log('SERVICE getCNOSENT', response['data'].map(Consent.fromJSON));
        return response['data'].map(Consent.fromJSON);
      })
      .catch(Helper.handleError);
  }

  getConsent(id: string): Observable<Consent> {
    const url = environment.API_ENDPOINT + `consents/${id}`;

    return this.http
      .get(url)
      .map((response: ConsentJSON) => {
        console.log('getConsent', response);
        console.log('getConsent MAP', Consent.fromJSON(response));
        return Consent.fromJSON(response);
      })
      .catch(Helper.handleError);
  }

  update(id: string, consent: Consent): Observable<Consent> {
    const url = environment.API_ENDPOINT + `consents/${id}`;
    //const consent_json = consent.toJSON();
    const consent_json = consent;

    return this.http
      .patch(url, consent_json)
      .map((response: ConsentJSON) => {
        console.log(response);
        return Consent.fromJSON(response);
      })
      .catch(Helper.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occured');
    console.log(error);
    return Promise.reject(error.message || error);
  }

}
