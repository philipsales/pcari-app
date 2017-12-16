import { Injectable }       from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { AuthHttp } from 'angular2-jwt';

import { Question }         from './question';
import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { environment }    from 'environments/environment';

@Injectable()
export class QuestionService {

  constructor(private http: Http,
	      public authHttp: AuthHttp) {
  }//--constructor

    // Todo: get from a remote source of question metadata
    // Todo: make asynchronous
    getQuestions() : Observable<Question[]>  {

      //const url = environment.API_ENDPOINT + '/questions/';

    const url = 'http://127.0.0.1:8888' + '/questions';

    return this.authHttp
               .get(url)
               .map((response: Response) => {
                  console.warn(response, 'OUTTTTTTTTTTTTTT');
                  return response.json().map(Question.fromJSON);	
              });
    }//--getQuestions
}//--QuestionService
