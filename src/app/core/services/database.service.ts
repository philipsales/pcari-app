import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
//import { Observable } from 'rxjs';
import { Observable } from 'rxjs/Observable';
//import { map, catch } from 'rxjs/operators';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
//import { AuthHttp } from 'angular2-jwt';
//import 'rxjs/add/operator/toPromise';

import { Helper }         from '../helper';
import { Database }       from '../models';
import { environment }    from 'environments/environment';
import { Data } from '@angular/router/src/config';

@Injectable()
export class DatabaseService {

  private headers = new Headers({'Content-Type': 'application/json'});

  private databaseUrlVersion = 'v1';
  private databaseUrl = environment.API_ENDPOINT + '/databases'; 

  constructor(private http: Http) {
  }//--constructor

  /*
  getAll(): Promise<Database[]> {
    const url = environment.API_ENDPOINT + '/databases/';
    console.log("--OnInit--Database.Service--");
    console.log(url);
    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data as Database[])
                    .catch(this.handleError);
  }//--getAll
  */

  getAll(): Observable<Database[]> {
    const url = environment.API_ENDPOINT + 'databases/';
   
    return this.http
               .get(url)
               .map((response: Response) => {
                    
                    return (response.json() as Database[]);
                    //return (JSON.parse(response['_body']) as Database[]);
                    //return (response.json() as Database[])
               })
               .catch(Helper.handleError);
  }

  downloadFileJSON() {
    const url = `${this.databaseUrl}`;

    return this.http
               .get(url)
               .map((res) => {
                 console.info("BODY: ", res['_body']);
                 console.info("BODY: ", JSON.stringify(res['_body'].data));
                 //return new Blob([JSON.stringify(res['_body'].data)], {type: 'application/json'});
                 return new Blob([JSON.stringify(res['_body'])], {type: 'application/json'});
               });
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occured');
    console.log(error);
    return Promise.reject(error.message || error);
  }
}
