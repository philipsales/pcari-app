import { Injectable }       from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

import { AuthHttp } from 'angular2-jwt';

//import { Form }         from './form-question.model';
//import { Question }         from './form-question.model';

import { environment }      from 'environments/environment';

import { forms }         from './form-question.model';
import { Form, Section, Question, Option } from 'app/core/models';


@Injectable()
export class FormQuestionService {

  constructor(
    private http: Http, 
    public authHttp: AuthHttp) {
  }//--constructor

  /*
  for hardcoded only
  import { forms }         from './form-question.model';
  */

  //getQuestions(): Observable<Form[]> {
  getQuestions(): Observable<Form> {
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

  submitForm(form: Form): Observable<Question> {
    console.log('service--:',form);

    let question1 = new Question ( 
      'key1',
      'label1',
      'text',
      '',
      false,
      0,
      []
    );

    let question2 = new Question ( 
      'key2',
      'label2',
      'textbox',
      '',
      false,
      0,
      [] 
    );


    //WORKING
    let question = 
    [
      {
      "id": "123",
      "key": "pcari1",
      "label": "pcari1",
      "options": "Male|Female",
      "order": 0,
      "required": true,
      "type": "dropdown",
      "value": ""
      },
      {
      "id": "1233",
      "key": "postman2",
      "label": "pcari2",
      "options": "Male|Female",
      "order": 0,
      "required": true,
      "type": "dropdown",
      "value": ""
      }
    ];

    /*
    let question: Question[] = []; 
    question.push(question1);
    question.push(question2);
    */





    const url = environment.API_QUESTION_HOST + '/questions';

    let question_json = JSON.stringify(question);

    console.log('--inside.service.question_object----');
    console.log(question);
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
                  console.log('JSON--',response.json());
                  console.warn(response,'--RESPONSE--');
                  return new Question('','','','',false,1,[]);
                  //return Question.fromJSON(response.json());
               })
               .catch(error => {
                  console.log('error',error);
                  throw error;
              });
  }//--create    



}

