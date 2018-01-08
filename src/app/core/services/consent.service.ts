import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

//import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

import { Helper }         from '../helper';
import { Consent }       from '../models';
import { environment }    from 'environments/environment';

@Injectable()
export class ConsentService {

  private headers = new Headers({'Content-Type': 'application/json'});

  private consentUrlVersion = 'v1';
  private consentUrl = environment.API_ENDPOINT + '/consents'; 

  constructor(private http: Http) {
  }//--constructor

  getAll(): Promise<Consent[]> {
    const url = environment.API_ENDPOINT + '/consents/';
    console.log("--OnInit--consent.Service--");
    console.log(url);
    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json() as Consent[])
                    .catch(this.handleError);
  }//--getAll

  private handleError(error: any): Promise<any> {
    console.log('An error occured');
    console.log(error);
    return Promise.reject(error.message || error);
  }

}
