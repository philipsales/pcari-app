import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { QuestionBase }              from './question-base';
import { QuestionControlService }    from './question-control.service';
import { QuestionService } from './question.service';
import { TextboxQuestion }  from './question-textbox';
import { TextareaQuestion }  from './question-textarea';
import { CheckboxQuestion }  from './question-checkbox';
import { DropdownQuestion }  from './question-dropdown';
import { RadiobuttonQuestion }  from './question-radiobutton';
import { DatepickerQuestion }  from './question-datepicker';

import { Form, Section, Question } from 'app/core/models';


@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: [ './dynamic-form.component.css' ],
    providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

    @Input() formArray: FormArray;
    @Input() questionz: Question[];
    @Input() sectionz: Section[];

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

    sectionGroupTest: FormGroup;
    formArrayTest: FormArray;

    ngOnInit() {

    this.formArrayTest = new FormArray([]); 

    //this.service.getQuestions().subscribe(response => {


          for (let my_section of this.sectionz) {

              this.sectionGroupTest = this.qcs.toFormGroupSection(my_section);
              this.formArrayTest.push(this.sectionGroupTest);
              this.sectionGroupTest.addControl('questions', new FormArray([]));
              this.sectionGroupTest.addControl('questionsType', new FormArray([]));
              this.sectionGroupTest.addControl('questionsBase', new FormArray([]));

          for (let my_question of my_section.questions) {

          (<FormArray>this.sectionGroupTest.get('questions')).push(this.qcs.toFormGroupQuestion(my_question));

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

          console.log('-DROPDOWN.OPTIONS---', my_question.options);

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
            console.log('Not yet supported ' , my_question.type);
          } 

          console.warn('THIS.QUESTIONS', this.questions);

          (<FormArray>this.sectionGroupTest
                          .get('questionsType'))
                          .push(this.qcs
                                    .toFormGroupQuestionType(this.questions));

          console.log('--sectionGroupTest--ITERATE-', this.sectionGroupTest);
        }//--for

      }//--for


      //this.questions = this.questions.sort((a, b) => a.order - b.order);

      //(<FormArray>this.sectionGroupTest.get('questionsBase')).push(this.qcs.toFormGroup(this.questions));

      this.sectionGroupTest.controls.questionsBase = this.qcs.toFormGroup(this.questions);

      this.form = this.qcs.toFormGroup(this.questions);

      console.log('--formARrayTest--', this.formArrayTest);
      console.log('--sectionGroupTest--FINAL-', this.sectionGroupTest);
      console.log('--this.form--', this.form);


      //});//--getQuestions

    }//--onInit

    onSubmit() {
      this.payLoad = JSON.stringify(this.form.value);
    }//--onSubmit

}//--DynamicFormComponent
