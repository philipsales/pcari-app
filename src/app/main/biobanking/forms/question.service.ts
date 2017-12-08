import { Injectable }       from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { AuthHttp } from 'angular2-jwt';

import { Question }         from './question';
import { environment }    from 'environments/environment';

@Injectable()
export class QuestionService {

  constructor(private http: Http,
	      public authHttp: AuthHttp) {
  }//--constructor

    // Todo: get from a remote source of question metadata
    // Todo: make asynchronous
    getQuestions() : Observable<Question[]>  {
	const url = environment.API_ENDPOINT + '/questions/';
	return this.authHttp.get(url).map((response: Response) => {
	    console.warn(response, 'OUTTTTTTTTTTTTTT');
	    return response.json().map(Question.fromJSON);	
	});
    }//--getQuestions

    create(question: Question): Observable<Question> {
	console.log(question);
	const url = environment.API_ENDPOINT + '/questions/';
	let question_json = JSON.stringify(question);
	console.log(question_json);
	let headers = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: headers });
	return this.authHttp.post(url, question_json)
            .map((response: Response) => {
		return Question.fromJSON(response.json());
            })
            .catch(error => {
		console.log('error')
		throw error;
	    });
    }//--create    
}//--QuestionService
