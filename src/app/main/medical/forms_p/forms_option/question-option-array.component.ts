import { Component, OnInit, OnChanges, Output, Input  } from '@angular/core';

import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Question, Form, Section, Option } from 'app/core/models';

import { KeyGenerator } from 'app/core/utils';

@Component({
  selector: 'question-option-array',
  templateUrl: './question-option-array.component.html',
  styleUrls: ['./question-option-array.component.css']
})
export class QuestionOptionArrayComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() options: Option[];
  @Input() viewState: string;

  constructor( 
    private fb: FormBuilder,
    private keyGenerator: KeyGenerator
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

    if(this.options.length > 1){
      this.options.splice(index,1);

      (<FormArray>this.parentForm
                      .get('options'))
                      .removeAt(index);
    }
  }



}
