import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';
import { TextboxQuestion } from './question-textbox';
import { TextareaQuestion } from './question-textarea';
import { CheckboxQuestion } from './question-checkbox';
import { DropdownQuestion } from './question-dropdown';
import { RadiobuttonQuestion } from './question-radiobutton';
import { DatepickerQuestion } from './question-datepicker';
import { NotificationsService } from 'angular2-notifications';

import { Form, Section, Question, FormAnswer, Answer, Case } from 'app/core/models';
import { CaseService } from 'app/core/services';

import { environment } from 'environments/environment';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() formArray: FormArray;
  @Input() questionz: Question[];
  @Input() sectionz: Section[];

  questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  private section: string[];
  private sections: Section[];

  constructor(
    private qcs: QuestionControlService,
    private caseservice: CaseService,
    private notificationsService: NotificationsService
  ) {
  }//--constructor


  private questions_test: QuestionBase<any>[] = [];
  private form_test: FormGroup;
  private sections_test: Section;
  private sections_array: Section[] = [];
  private casenumber: String = '123';

  sectionGroupTest: FormGroup;
  formArrayTest: FormArray;

  ngOnInit() {

    this.formArrayTest = new FormArray([]);

    for (let my_section of this.sectionz) {

      this.sectionGroupTest = this.qcs.toFormGroupSection(my_section);
      this.formArrayTest.push(this.sectionGroupTest);
      this.sectionGroupTest.addControl('questions', new FormArray([]));
      this.sectionGroupTest.addControl('questionsType', new FormArray([]));

      for (let my_question of my_section.questions) {

        (<FormArray>this.sectionGroupTest.get('questions')).push(this.qcs.toFormGroupQuestion(my_question));

        if (my_question.type == 'textbox') {
          this.questions.push(
            new TextboxQuestion({
              key: my_question.key,
              label: my_question.label,
              value: my_question.value,
              required: my_question.required ? true : false,
              order: my_question.order
            })
          );
        }
        else if (my_question.type == 'dropdown') {
          this.questions.push(
            new DropdownQuestion({
              key: my_question.key,
              label: my_question.label,
              type: my_question.type,
              value: my_question.value,
              order: my_question.order,
              required: my_question.required ? true : false,
              options: my_question.options
            })
          );
        }
        else if (my_question.type == 'checkbox') {
          this.questions.push(
            new CheckboxQuestion({
              key: my_question.key,
              label: my_question.label,
              type: my_question.type,
              value: my_question.value,
              order: my_question.order,
              required: my_question.required ? true : false,
              options: my_question.options
            })
          );
        }
        else if (my_question.type == 'radiobutton') {
          this.questions.push(
            new RadiobuttonQuestion({
              key: my_question.key,
              label: my_question.label,
              type: my_question.type,
              value: my_question.value,
              order: my_question.order,
              required: my_question.required ? true : false,
              options: my_question.options
            })
          );
        }
        else if (my_question.type == 'datepicker') {
          this.questions.push(
            new DatepickerQuestion({
              key: my_question.key,
              label: my_question.label,
              type: my_question.type,
              value: my_question.value,
              required: my_question.required ? true : false,
              order: my_question.order
            })
          );
        }
        else if (my_question.type == 'textarea') {
          this.questions.push(
            new TextareaQuestion({
              key: my_question.key,
              label: my_question.label,
              type: my_question.type,
              required: my_question.required ? true : false,
              order: my_question.order
            })
          );
        }
        else if (my_question.type == 'email') {
          this.questions.push(
            new TextboxQuestion({
              key: my_question.key,
              label: my_question.label,
              type: my_question.type,
              order: my_question.order
            })
          );
        }
        else if (my_question.type == 'password') {
          this.questions.push(
            new TextboxQuestion({
              key: my_question.key,
              label: my_question.label,
              type: my_question.type,
              order: my_question.order
            })
          );
        }
        else {
          console.log('Not yet supported ', my_question.type);
        }

        (<FormArray>this.sectionGroupTest
          .get('questionsType'))
          .push(this.qcs
            .toFormGroupQuestionType(this.questions));
      }//--for

    }//--for


    //this.questions = this.questions.sort((a, b) => a.order - b.order);
    this.form = this.qcs.toFormGroup(this.questions);

    console.log('--formARrayTest--', this.formArrayTest);
    console.log('--this.form--', this.form);
  }//--onInit


  onChange(event) {
    console.log(event.target.value);
    this.casenumber = event.target.value;
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    let answers: Answer[] = [];
    Object.keys(this.form.value).forEach((key) => {
      answers.push(new Answer(key, this.form.value[key]));
    });
    let forms: FormAnswer[] = [];
    forms.push(new FormAnswer('', '', false, answers));


    console.warn(this.casenumber, 'CASE NUMBER');
    console.warn(answers, 'WAAAAAAAAA');
    let to_save = new Case(this.casenumber.toString(), environment.ORG_MEDICAL, '', forms);
    this.caseservice.create(to_save)
      .subscribe(created_case => {
        console.warn(created_case, 'AYUS');
        this.notificationsService
          .success(
          'Case: ' + created_case['case_number'],
          'Successfully Saved.',
          {
            timeOut: 10000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: false
          }
          );
      },
      errors => {
        console.warn('errors');
        throw errors;
      });
  }//--onSubmit
}//--DynamicFormComponent
