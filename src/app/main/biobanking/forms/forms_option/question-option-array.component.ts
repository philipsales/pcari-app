import { Component, OnInit, OnChanges, Output, Input  } from '@angular/core';

import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Question, Form, Section, Option } from './../forms_detail/form-question.model';

import { KeyGeneratorService } from 'app/core/services';

@Component({
  selector: 'question-option-array',
  templateUrl: './question-option-array.component.html',
  styleUrls: ['./question-option-array.component.css']
})
export class QuestionOptionArrayComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() options: Option[];

  constructor( 
    private fb: FormBuilder,
    private keyGenerator: KeyGeneratorService
  ) { 
  }

  ngOnInit() {
    this.initOption();
    this.parentForm.addControl('options', new FormArray([]));
  }

  initOption(){
    if(this.options.length == 0){
      this.options.push({
        key   : this.keyGenerator.create(),
        name  : 'Untitled option'
      });
    }
  }

  addOption(){
    this.options.push({
      key   : this.keyGenerator.create(),
      name  : 'Untitled option'
    })
  }

  removeOption(index: number){
    this.options.splice(index,1);
    (<FormArray>this.parentForm.get('options')).removeAt(index);
  }



}
