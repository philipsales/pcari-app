import { Component, OnInit, Output, Input  } from '@angular/core';

import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Question, Form, Section } from './../forms_detail/form-question.model';

@Component({
  selector: 'question-content',
  templateUrl: './question-content.component.html',
  styleUrls: ['./question-content.component.css']
})
export class QuestionContentComponent implements OnInit {

  @Input() formArray: FormArray;
  @Input() question: Question;

  questionGroup: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.questionGroup = this.toFormGroup(this.question);
  }

  toFormGroup(question: Question){
    return this.fb.group({
        key        : question.key,
        label      : question.label,
        type       : question.type,
        value      : question.value,
        required   : question.required,
        order      : question.order,
        options    : [] 
    });
  }



}
