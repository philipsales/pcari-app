import { Injectable }       from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

//import { Observable } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
//import { AuthHttp } from 'angular2-jwt';

import { Question }         from './question';
import { environment }    from 'environments/environment';

@Injectable()
export class QuestionService {

  constructor(private http: Http
  // public authHttp: AuthHttp
  ) {
  }//--constructor

    // Todo: get from a remote source of question metadata
    // Todo: make asynchronous
    getQuestions() : Observable<Question[]>  {
	const url = environment.API_ENDPOINT + '/questions/';
  //return this.authHttp
  return this.http
             .get(url).map((response: Response) => {
	    console.warn(response, 'OUTTTTTTTTTTTTTT');
	    return response.json().map(Question.fromJSON);	
	});
    }//--getQuestions

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
  //return this.authHttp
  return this.http
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
}//--QuestionService
