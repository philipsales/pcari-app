import { Component, OnInit, OnChanges, Output, Input  } from '@angular/core';

import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Question, Form, Section, Option } from './../forms_detail/form-question.model';

@Component({
  selector: 'question-option-array',
  templateUrl: './question-option-array.component.html',
  styleUrls: ['./question-option-array.component.css']
})
export class QuestionOptionArrayComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() options: Option[];

  constructor( private fb: FormBuilder) { 
  }

  ngOnInit() {
    this.initOption();
    this.parentForm.addControl('options', new FormArray([]));
  }

  initOption(){
    if(this.options.length == 0){
      this.options.push({
        key    : '',
        name  : ''
      });
    }
  }

  addOption(){
    this.options.push({
      key    : '',
      name  : ''
    })
  }

  removeOption(index: number){
    if (this.options.length > 1){
      this.options.splice(index,1);
      //(<FormArray>this.parentForm.get('options')).removeAt(index);
      //(<FormArray>this.parentForm.controls('options')).removeAt(index);
      (<FormArray>this.parentForm.get('options')).removeAt(index);
    }
  }



}
