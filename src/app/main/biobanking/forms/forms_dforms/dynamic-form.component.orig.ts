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

import { Form,Section } from 'app/core/models';

@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: [ './dynamic-form.component.css' ],
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


    private questions_test: QuestionBase<any>[] = [];
    private form_test : FormGroup;
    private sections_test: Section;
    private sections_array: Section[]=[];

    ngOnInit() {

      this.service
          .getForms()
          .subscribe(forms => {
            console.log('-1.FORMS.FROM SERVICE--',forms);
            //this.forms = forms;

            for (let form of forms) {

              for (let section of form.sections) {
              this.sections_test = section;

                console.log('--this.sections_test--', this.sections_test);
                
                console.log('--section.name--', section.name);
                console.log('--section--', section);

                for (let question of section.questions) {
                console.log('--question--', question);

                  if(question.type == 'dropdown'){
                    this.questions_test.push(
                      new DropdownQuestion({
                        key      : question.key,
                        label    : question.label,
                        type     : question.type,
                        value    : question.value,
                        order    : question.order,
                        required : question.required ? true : false,
                        options  : "Male|Female"

                      })
                    );
                  } 
                }
              }
            }

          console.log('--4.THIS.QUESTIONS_TEST--',this.questions_test);
          console.log('--THIS.SECTION_TEST--', this.sections_test);

          this.questions_test = this.questions_test.sort((a, b) => a.order - b.order);
          this.form_test = this.qcs.toFormGroup(this.questions_test);

          this.questions = this.questions_test.sort((a, b) => a.order - b.order);
          
          console.log('--THIS.SECTIONS_ARRAY--', this.sections_array);

          this.form = this.qcs.toFormGroup(this.questions_test);

          console.log('--5.THIS.FORM_test--',this.form_test);

          });

      this.service
          .getQuestions()
          .subscribe(response => {

          console.log('-2.RESPONSE--',response);

          for (let my_question of response) {

            console.log('-3.MY_QUESTIONS--',my_question);

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

      console.log('--4.THIS.QUESTION--',this.questions);

      //this.questions = this.questions.sort((a, b) => a.order - b.order);
      //this.form = this.qcs.toFormGroup(this.questions);

      console.log('--5.THIS.FORM--',this.form);
      });//--getQuestions

    }//--onInit

    onSubmit() {
      this.payLoad = JSON.stringify(this.form.value);
    }//--onSubmit

}//--DynamicFormComponent
