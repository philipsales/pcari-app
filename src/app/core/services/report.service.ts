import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Helper }         from '../helper';
import { Report }       from '../models';
import { environment }    from 'environments/environment';

@Injectable()
export class ReportService {

  constructor(private http: Http) {
  }//--constructor

  getAll(): Promise<Report[]> {
    const url = environment.API_ENDPOINT + '/reports/';
    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data as Report[])
                    .catch(this.handleError);
  }//--getAll

  private handleError(error: any): Promise<any> {
    console.log('An error occured');
    console.log(error);
    return Promise.reject(error.message || error);
  }

}
