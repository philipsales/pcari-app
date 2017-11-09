import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Helper }         from '../helper';
import { Database }       from '../models';
import { environment }    from 'environments/environment';

@Injectable()
export class DatabaseService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }//--constructor

  getAll(): Promise<Database[]> {
    const url = environment.API_ENDPOINT + '/databases/';
    //const url = '/api/databases/';
    console.log("--OnInit--Database.Service--");
    console.log(url);
    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data as Database[])
                    .catch(this.handleError);
  }//--getAll

  private handleError(error: any): Promise<any> {
    console.log('An error occured');
    console.log(error);
    return Promise.reject(error.message || error);
  }
}
