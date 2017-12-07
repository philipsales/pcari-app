import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { AuthHttp } from 'angular2-jwt';

import { Helper }         from '../helper';
import { Form }           from '../models';
import { environment }    from 'environments/environment';

@Injectable()
export class FormService {

  private headers = new Headers({'Content-Type': 'application/json'});

  private apiV1 = 'v1';
  private formUrl = environment.API_ENDPOINT + '/forms'; 

  constructor(private http: Http) {
  }//--constructor

  getAll(): Observable<Form[]> {
    const url = environment.API_ENDPOINT + '/forms/';

    console.log("--OnInit--form.Service--");

    return this.http.get(url)
                 .map((response: Response) => {
                    console.log("--response.json--")
                    console.log(response.json().data as Form[])
                    return (response.json().data as Form[])
                 })
                 .catch(Helper.handleError);
  }

}
