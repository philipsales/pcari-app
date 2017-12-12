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

import { Question }         from './form-question.model';


@Injectable()
export class FormQuestionService {

  constructor(private http: Http, public authHttp: AuthHttp) {
  }//--constructor

  getQuestions(): Observable<Department[]> {
    return of(departments);
  }

  create(question: Question): Observable<Question> {
    console.log(question);
    //const url = environment.API_QUESTION_HOST + environment.API_QUESTION_ENDPOINT + '/questions/';

    console.log('--inside.service.question----');
    console.log(question);

    //let question_json = JSON.stringify(question);

    const url = environment.API_ENDPOINT + '/questions/';
    let question_json = 
      { 
        "key": "sdbatmansi",
        "label": "name3",
        "type": "name3",
        "required": true,
        "value": "",
        "order": 1
    };

    //const url1 = environment.API_QUESTION_HOST + '/questions/';
    const url1 = 'http://127.0.0.1:8888' + '/questions';
    let question_json1 = 
    [
      { 
        "key": "name3",
        "label": "name3",
        "type": "name3",
        "required": true,
        "value": "",
        "order": 1
      },
      { 
        "key": "name3",
        "label": "name3",
        "type": "name3",
        "required": true,
        "value": "",
        "order": 1
      }
    ];

    console.log('--inside.service.question_json----');
    console.log(question_json);


    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    headers.append('Allow', 'GET,POST,HEAD,OPTIONS');
    headers.append('Access-Control-Allow-Origin', '*');
    let options = new RequestOptions({ headers: headers });
    console.log(options)

    //return this.authHttp
    //.post(url, question_json, options)
    // .post(url, question_json )

    return this.authHttp
               .post(url1, question_json1, { headers: headers })
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

