import { Injectable }       from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { AuthHttp } from 'angular2-jwt';

import { Form }         from './form-question.model';
import { forms }         from './form-question.model';
import { environment }      from 'environments/environment';

import { Question }         from './form-question.model';


@Injectable()
export class FormQuestionService {

  constructor(private http: Http, public authHttp: AuthHttp) {
  }//--constructor

  /*
  for hardcoded only
  import { forms }         from './form-question.model';
  */

  getQuestions(): Observable<Form[]> {
    return of(forms);
  }

  create(question: Question): Observable<Question> {
    console.log(question);
    const url = environment.API_QUESTION_HOST + '/questions';

    console.log('--inside.service.question----');
    console.log(question);

    let question_json = JSON.stringify(question);


    console.log('--inside.service.question_json----');
    console.log(question_json);


    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    headers.append('Allow', 'GET,POST,HEAD,OPTIONS');
    headers.append('Access-Control-Allow-Origin', '*');
    let options = new RequestOptions({ headers: headers });

    return this.authHttp
               .post(url, question_json, options)
               .map((response: Response) => {
                  console.warn(response,'--RESPONSE--');
                  return new Question('','','','',false,1,[]);
                  //return Question.fromJSON(response.json());
               })
               .catch(error => {
                  console.log('error')
                  throw error;
              });
  }//--create    


}

