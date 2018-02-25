import { Injectable } from '@angular/core';

// import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import { Helper } from '../helper';
import { Form, Question } from '../models';
import { environment } from 'environments/environment';
import { FormJSON } from 'app/core/interfaces';

@Injectable()
export class FormService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private apiV1 = 'v1';

  private apiVersion = this.apiV1;
  private formUrl = environment.API_ENDPOINT + '/forms';

  constructor(public http: HttpClient) {
  }// --constructor
  /*
    getQuestions(): Observable<Question[]>  { 
      const url = environment.API_ENDPOINT + '/questions/';
      // const url = 'http://127.0.0.1:8888' + '/questions';
      return this.http
               .get(url)
               .map((response: Response) => {
                  console.warn(response, 'OUTTTTTTTTTTTTTT');
                  response.json().data1.map(Question.fromJSON);
                  // return (response.json().data as Question[])
              });
    }// --getQuestions
  */

  getForms(): Observable<Form[]> {
    const url = environment.API_ENDPOINT + 'forms/';

    return this.http.get(url).map((response: Response) => {
      return response['data'].map(Form.fromJSON);
    }).catch(Helper.handleError);
  }

  getBiobankForms(): Observable<Form[]> {
    const biobank_form_type = environment.FORM_TYPE_BIOBANK;
    const url = environment.API_ENDPOINT + 'forms/';
    return this.http.get(url).map((response) => {
      return response['data'].filter((all_forms: FormJSON) => {
        return all_forms.type === biobank_form_type;
      }).map(Form.fromJSON);
    }).catch(Helper.handleError);
  }

  getMedicalForms(): Observable<Form[]> {
    const medical_form_type = environment.FORM_TYPE_MEDICAL;
    const url = environment.API_ENDPOINT + 'forms/';
    return this.http.get(url).map((response: Response) => {
      return response['data'].filter((all_forms: FormJSON) => {
        return all_forms.type === medical_form_type;
      }).map(Form.fromJSON);
    }).catch(Helper.handleError);
  }

  getForm(id: string): Observable<Form> {
    const url = environment.API_ENDPOINT + `forms/${id}`;
    return this.http.get(url)
      .map((response: FormJSON) => {
        // return (response.json().data as Form)
        return Form.fromJSON(response);
      })
      .catch(Helper.handleError);
  }

  /*
  // TODO: SHOUD return Object Form instead of Question
  submitForm(form: Form): Observable<Question> {


    // TODO: DUMMY REQUESTION, replace FORM object when API done
    const question = [
      {
      'id': '123',
      'key': 'pcari1',
      'label': 'pcari1',
      'options': 'Male|Female',
      'order': 0,
      'required': true,
      'type': 'dropdown',
      'value': ''
      },
      {
      'id': '1233',
      'key': 'postman2',
      'label': 'pcari2',
      'options': 'Male|Female',
      'order': 0,
      'required': true, 
      'type': 'dropdown',
      'value': ''
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
  }// --create
*/

  checkForm(form: Form) {
    const ewan_json = JSON.stringify(form);
    const form_json = form.toJSON();
    console.warn(form_json, 'IN STRING');
  }

  //submitForm(form: FormJSON): Observable<Form> {
  submitForm(form: any): Observable<Form> {
    const url = environment.API_ENDPOINT + 'forms/';
    console.log('submitForm: ', url);
    console.log('Form before: ', form.dir_path);

    let input = new FormData();

    var file = form.file;
    input.append("file", file);
    console.log('FORM BEFORE dirpath: ', form);
    input.append("data", JSON.stringify(Form.fromJSON(form)));
    //input.append("data", form);
    console.log('FORM AFTER dirpath: ', form);

    return this.http
      //.post(url, form,
      .post(url, input,
      /*
      .post(url, input,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    }
    */
    )
      /*
      .map((response: FormJSON) => {
        console.log(response, 'FORM CREATED from /forms');
        return Form.fromJSON(response);
      })
      */
      .map((response: Response) => {
        console.log(response, 'FORM CREATED from /forms');
        //return response['data'].map(Form.fromJSON);
        //return Form.fromJSON();
      })

      .catch(Helper.handleError);
  }

  upload(fileToUpload: any): Observable<any> {
    let input = new FormData();
    input.append("file", fileToUpload);
    console.log('filetoUpload', fileToUpload);
    console.log('ipnut', input);

    const url = environment.API_ENDPOINT + 'cases/upload';

    console.log(url);


    var headers = { 'Content-Disposition': 'multipart/form-data' };
    var header1 = { 'Content-Type': 'application/json' };
    var header2 = { 'Accept': 'application/json' };

    /*
    return this.httpclient.post(url, form, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    */
    return this.http.post(url, input)
      .map((response: Response) => {
        console.log('RESPONSE: ', response);
        return response;
      }).catch(Helper.handleError);
  }

  updateForm(form: FormJSON): Observable<Form> {
    const url = environment.API_ENDPOINT + 'forms/' + form._id;

    return this.http.patch(url, form).map((response: FormJSON) => {
      // return (response.json().data as Form[])
      return Form.fromJSON(response);
    })
      .catch(Helper.handleError);
  }
}
