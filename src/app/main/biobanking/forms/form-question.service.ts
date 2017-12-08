import { Injectable }       from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { AuthHttp } from 'angular2-jwt';

import { Department }         from './form-question.model';
import { departments }         from './form-question.model';
import { environment }      from 'environments/environment';


@Injectable()
export class FormQuestionService {

  constructor(private http: Http, public authHttp: AuthHttp) {
  }//--constructor

  getQuestions(): Observable<Department[]> {
    return of(departments);
  }


}

