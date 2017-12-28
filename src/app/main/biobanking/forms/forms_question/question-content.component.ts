import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';

import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Question, Form, Section } from './../forms_detail/form-question.model';

import 'rxjs/add/operator/toPromise';

const resolvedPromise = Promise.resolve(undefined);

@Component({
  selector: 'question-content',
  templateUrl: './question-content.component.html',
  styleUrls: ['./question-content.component.css']
})
export class QuestionContentComponent implements OnInit {

  @Input() formArray: FormArray;
  @Input() question: Question;

  @Output() removed = new EventEmitter();

  questionGroup: FormGroup;
  index: number;

  questionTypes: any[];

  constructor( 
    private fb: FormBuilder
  ) { 

  }

  ngOnInit() {

    console.log('--question-content--', this.formArray);
    this.questionGroup = this.toFormGroup(this.question);

    this.index = this.formArray.length;
    this.formArray.push(this.questionGroup);

    //Make into questionTypeService
    this.questionTypes = [ 
      { "value": "textbox",     "label": "text" },
      { "value": "textarea",    "label": "paragraph" },
      { "value": "dropdown",    "label": "dropdown" },
      { "value": "checkbox",    "label": "checkbox" },
      { "value": "radiobutton", "label": "radio" },
      { "value": "datepicker",  "label": "date" }
    ];
  }

  toFormGroup(question: Question){
    return this.fb.group({
        key        : question.key,
        label      : question.label,
        type       : question.type,
        value      : question.value,
        required   : question.required,
        order      : question.order
    });
  }



}
