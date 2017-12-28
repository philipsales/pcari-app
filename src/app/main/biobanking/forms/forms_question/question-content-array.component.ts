import { Component, OnInit, Output, Input  } from '@angular/core';

import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Question, Form, Section } from './../forms_detail/form-question.model';

@Component({
  selector: 'question-content-array',
  templateUrl: './question-content-array.component.html',
  styleUrls: ['./question-content-array.component.css']
})
export class QuestionContentArrayComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() questions: Question[]; 

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initQuestion();
    this.parentForm.addControl('questions', new FormArray([]));
  }

  initQuestion(){
    if(this.questions.length == 0){
      this.questions.push({
        key        : '',
        label      : '',
        type       : '',
        value      : '',
        required   : false,
        order      : 0,
        options    : []
      });
    }
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

  removeQuestion(index: number){
    console.log('--content-array-index', index);

    this.questions.splice(index,1);
    (<FormArray>this.parentForm.get('questions')).removeAt(index);
  }

}
