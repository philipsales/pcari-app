import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import { Observable } from 'rxjs/Observable';
//import { map, catch } from 'rxjs/operators';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

//import { AuthHttp } from 'angular2-jwt';

import { Helper }         from '../helper';
import { Form, Question }           from '../models';
import { environment }    from 'environments/environment';

@Injectable()
export class FormService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private apiV1 = 'v1';

  private apiVersion = this.apiV1;
  private formUrl = environment.API_ENDPOINT + '/forms'; 

  constructor(
    private http: Http
    //public authHttp: AuthHttp
    ) {
  }//--constructor

  getQuestions() : Observable<Question[]>  {

    //const url = environment.API_ENDPOINT + '/questions/';

  const url = 'http://127.0.0.1:8888' + '/questions';

  //return this.authHttp
  return this.http
             .get(url)
             .map((response: Response) => {
                console.warn(response, 'OUTTTTTTTTTTTTTT');
                //return response.json().map(Question.fromJSON);	
                return (response.json().data as Question[])
            });
  }//--getQuestions

  getForms(): Observable<Form[]> {
    const url = environment.API_ENDPOINT + '/forms/';

    return this.http
               .get(url)
               .map((response: Response) => {
                    //return (response.json().data as Form[])
                    return (response.json()as Form[])
                 })
                 .catch(Helper.handleError);
  }

  getForm(id:number): Observable<Form> {

    const url = environment.API_ENDPOINT + `/forms/${id}`;

    return this.http
               .get(url)
               .map((response: Response) => {
                    //return (response.json().data as Form)
                    return (response.json() as Form)
                 })
                 .catch(Helper.handleError);
  }

  //TODO: SHOUD return Object Form instead of Question
  submitForm(form: Form): Observable<Question> {


    //TODO: DUMMY REQUESTION, replace FORM object when API done 
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

    const url = environment.API_QUESTION_HOST + '/questions';

    let question_json = JSON.stringify(question);

    //TODO: Refractor headers to allow cors
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    headers.append('Allow', 'GET,POST,HEAD,OPTIONS');
    headers.append('Access-Control-Allow-Origin', '*');
    let options = new RequestOptions({ headers: headers });

    //return this.authHttp

    return this.http.post(url, question_json, options)
               .map((response: Response) => {

                  //TODO: temporary API not done
                  console.warn('--TEMPORARY FAKE RESPONSE---');
                  //return new Question('','','','',false,1,[]);
                  return (response.json() as Question);

                  //TODO: SHOUD return Object Form instead of Question
                  //return Question.fromJSON(response.json());
               })
               .catch(error => {
                  console.log('error',error);
                  throw error;
              });
  }//--create    




}
