import { Component, OnInit } from '@angular/core';

import { Question } from './question';

import { QuestionService } from './question.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-questions-create',
  templateUrl: './questions-create.component.html',
  styleUrls: ['./questions-create.component.css']
})
export class QuestionsCreateComponent implements OnInit {

  private question: Question;    
  private errors: any = {};
  private has_errors = false;
  private is_processing = false;

    constructor(
	private service: QuestionService,
	private _notificationsService: NotificationsService) {		
      this.question = new Question('','', '', '',false,1);
    }//--constructor

  ngOnInit() {
  }

  onToggleIsRequired(){
      console.log(this.question.required);
      this.question.required = !this.question.required;
  }

  onSaveClick(input_question: Question){
      this.errors = {};
      this.has_errors = false;
      this.is_processing = true;
      console.warn(input_question, 'TO CREATE');
      
      this.service.create(input_question).subscribe(
          created_question => {
	      this.is_processing = false;
	      console.warn(created_question, 'AYUS');
	      this._notificationsService.success(
		  'New Question : ' + input_question.label,
		  'Successfully Created.',
		  {
		      timeOut: 10000,
		      showProgressBar: true,
		      pauseOnHover: false,
		      clickToClose: false,
		  }
	      )
          },
          errors  => {
	      this.errors = errors;
	      this.has_errors = true;
	      this.is_processing = false;
	      console.warn('ERROR');
	      throw errors;
          });
  }//--onSaveClick
}
