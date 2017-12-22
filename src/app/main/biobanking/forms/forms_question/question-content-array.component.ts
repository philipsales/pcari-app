import { Component, OnInit, Output, Input  } from '@angular/core';

import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Question, Form, Section } from './../forms_detail/form-question.model';

@Component({
  selector: 'question-content-array',
  templateUrl: './question-content-array.component.html',
  styleUrls: ['./question-content-array.component.css']
})
export class QuestionContentArrayComponent implements OnInit {

  @Input() questions: Question[]; 
  @Input() parentForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log('--content--aray--', this.questions);
    console.log('--content----', this.parentForm);

    this.parentForm.addControl('questions', new FormArray([]));
  }

  addQuestion(){
    this.questions.push({
      key        : '',
      label      : '',
      type       : '',
      value      : '',
      required   : false,
      order      : 0,
      options    : []
    })
  }

  deleteQuestion(){
    
  }

}
