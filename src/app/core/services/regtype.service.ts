import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
//import { Observable } from 'rxjs';
import { Observable } from 'rxjs/Observable';
//import { map, catch } from 'rxjs/operators';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

//import { AuthHttp } from 'angular2-jwt';

import { Helper }         from '../helper';
import { RegType }        from '../models';
import { environment }    from 'environments/environment';


@Injectable()
export class RegTypeService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private apiV1 = 'v1';

  private apiVersion = this.apiV1;
  private formUrl = environment.API_ENDPOINT + '/registrytypes'; 

  constructor(
    private http: Http
    //    public authHttp: AuthHttp
    ) {
  }//--constructor

  getRegTypes(): Observable<RegType[]> {

    const url = environment.API_ENDPOINT + '/registrytypes/';
    return this.http
               .get(url)
               .map((response: Response) => {
                   //return (response.json().data as RegType[])
                    return (response.json() as RegType[])
                 })
                 .catch(Helper.handleError);
  }

}
