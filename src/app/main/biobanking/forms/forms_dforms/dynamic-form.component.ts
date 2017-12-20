import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from './question-base';
import { QuestionControlService }    from './question-control.service';
import { QuestionService } from './question.service';
import { TextboxQuestion }  from './question-textbox';
import { TextareaQuestion }  from './question-textarea';
import { CheckboxQuestion }  from './question-checkbox';
import { DropdownQuestion }  from './question-dropdown';
import { RadiobuttonQuestion }  from './question-radiobutton';
import { DatepickerQuestion }  from './question-datepicker';

import { Section } from 'app/core/models';

@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

    questions: QuestionBase<any>[] = [];
    form : FormGroup;
    payLoad = '';
    private section: string[];
    private sections: Section[];

    constructor(
      private service: QuestionService,
      private qcs: QuestionControlService
    ) {

    //dummy only
      this.sections = [ 
        {
          "key"   : "12", 
          "name"  : "Household Information",
          "order" : 1,
          "questions" : []
        },
        {
          "key"   : "2", 
          "name"  : "Family Planning",
          "order" : 1,
          "questions" : []
        },
        {
          "key"   : "3", 
          "name"  : "Maternal and Child",
          "order" : 1,
          "questions" : []
        },
        {
          "key"   : "4", 
          "name"  : "Infant",
          "order" : 1,
          "questions" : []
        },
      ];
    }//--constructor

    ngOnInit() {

      this.service
          .getQuestions()
          .subscribe(response => {
          for (let my_question of response) {

          console.log(my_question);

          if(my_question.type == 'textbox'){
            this.questions.push(
              new TextboxQuestion({
                key      : my_question.key,
                label    : my_question.label,
                value    : my_question.value,
                required : my_question.required ? true : false,
                order    : my_question.order
              })
            );
          } 
          else if(my_question.type == 'dropdown'){
            this.questions.push(
              new DropdownQuestion({
                key      : my_question.key,
                label    : my_question.label,
                type     : my_question.type,
                value    : my_question.value,
                order    : my_question.order,
                required : my_question.required ? true : false,
                options  : my_question.options
              })
            );
          } 
          else if(my_question.type == 'checkbox'){
            this.questions.push(
              new CheckboxQuestion({
                key      : my_question.key,
                label    : my_question.label,
                type     : my_question.type,
                value    : my_question.value,
                order    : my_question.order,
                required : my_question.required ? true : false,
                options  : my_question.options
              })
            );
          } 
          else if(my_question.type == 'radiobutton'){
            this.questions.push(
              new RadiobuttonQuestion({
                key      : my_question.key,
                label    : my_question.label,
                type     : my_question.type,
                value    : my_question.value,
                order    : my_question.order,
                required : my_question.required ? true : false,
                options  : my_question.options
              })
            );
          } 
          else if(my_question.type == 'datepicker'){
            this.questions.push(
              new DatepickerQuestion({
                key      : my_question.key,
                label    : my_question.label,
                type     : my_question.type,
                value    : my_question.value,
                required : my_question.required ? true : false,
                order    : my_question.order
              })
            );
          } 
          else if(my_question.type == 'textarea'){
            this.questions.push(
              new TextareaQuestion({
                key      : my_question.key,
                label    : my_question.label,
                type     : my_question.type,
                required : my_question.required ? true : false,
                order    : my_question.order
              })
            );
          } 
          else if(my_question.type == 'email'){
            this.questions.push(
              new TextboxQuestion({
                key      : my_question.key,
                label    : my_question.label,
                type     : my_question.type,
                order    : my_question.order
              })
            );
          } 
          else if(my_question.type == 'password'){
            this.questions.push(
              new TextboxQuestion({
                key      : my_question.key,
                label    : my_question.label,
                type     : my_question.type,
                order    : my_question.order
              })
            );
          } 
          else {
            alert('Not yet supported ' + my_question.type);
          } 
      }//--for

      console.log(this.questions);
      this.questions = this.questions.sort((a, b) => a.order - b.order);
      this.form = this.qcs.toFormGroup(this.questions);
      });//--getQuestions
    }//--onInit

    onSubmit() {
      this.payLoad = JSON.stringify(this.form.value);
    }//--onSubmit

}//--DynamicFormComponent
