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
    const url = environment.API_ENDPOINT + '/questions/';

    console.log('--inside.service.question----');
    console.log(question);

    let question_json = JSON.stringify(question);

    console.log('--inside.service.question_json----');
    console.log(question_json);


    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.authHttp
               .post(url, question_json)
               .map((response: Response) => {
                  return new Question('','','','',false,1,[]);
                  //return Question.fromJSON(response.json());
               })
               .catch(error => {
                  console.log('error')
                  throw error;
              });
  }//--create    


}

