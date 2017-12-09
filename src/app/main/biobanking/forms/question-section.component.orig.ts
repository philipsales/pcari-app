import { Component, OnInit } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { Question } from './question';

import { QuestionService } from './question.service';
import { NotificationsService } from 'angular2-notifications';


@Component({
  selector: 'question-section',
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.css']
})
export class QuestionSectionComponent implements OnInit {

  private sections: any;
  private count: number;
  private question: Question;    
  private questions: Question[];    
  private errors: any = {};
  private has_errors = false;
  private is_processing = false;

  private sample1: Question;
  private sample2: Question;
  private samples: Question[]=[];    

    constructor(
      private service: QuestionService,
      private _notificationsService: NotificationsService) {		

      this.question = new Question('','', '', '',false,1);
      this.questions = [];
      this.count = 1;
      this.sections = Array(this.count).fill(2).map((x,i)=>i);



      this.sample1 = new Question('sample1','label1', 'password', 'Foo',false,1);
      this.sample2 = new Question('sample2','label2', 'password', 'Foo',false,1);
      

    }//--constructor


  ngOnInit() {
  }

  onToggleIsRequired(){
      console.log(this.question.required);
      this.question.required = !this.question.required;
  }

  onAddSection() {
      console.log('---Add-Section.comopnent---');
      this.sections = Array(++this.count).fill(this.count).map((x,i)=>i);
  }

  onSaveClick(input_question: Question[]){
  //onSaveClick(input_question: string[]){
      console.warn(input_question, '--onSaveClick--');

      console.warn(this.samples, '--this.samples--');
      /*
      this.samples.push(
        new Question({
          key      : input_question.key,
          label    : "",
          value    : "",
          required : false,
          order    : 1 
        })
      );

      this.samples.push(
          new Question(input_question[0].key,'label1', 'password', 'Foo',false,1),
          new Question(input_question[1].key,'label1', 'password', 'Foo',false,1),
      );


      */

  }


  onSaveClick1(input_question: Question){
      this.errors = {};
      this.has_errors = false;
      this.is_processing = true;

      console.warn(input_question, 'TO CREATE');

      
      this.service
        //.create(input_question)
          .create(input_question)
          .subscribe( created_question => {
            this.is_processing = false;
            console.warn(created_question, 'AYUS');
            this._notificationsService
                .success( 'New Question : ' + input_question.label,
                          'Successfully Created.',
                          {
                              timeOut: 10000,
                              showProgressBar: true,
                              pauseOnHover: false,
                              clickToClose: false,
                          }
                        )
                    }, errors  => {
                        this.errors = errors;
                        this.has_errors = true;
                        this.is_processing = false;
                        console.warn('ERROR');
                        throw errors;
                    });
  }//--onSaveClick
}