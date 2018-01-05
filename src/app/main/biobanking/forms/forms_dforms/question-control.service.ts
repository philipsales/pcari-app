//builtin
import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder }  from '@angular/forms';

//custom
import { QuestionBase } from './question-base';

import { Question, Form, Section } from 'app/core/models';

@Injectable()
export class QuestionControlService {
  
  constructor(
    private fb: FormBuilder
  ) { }//--constructor

  private myForm: FormGroup;

  toFormGroupQuestionType(questions: QuestionBase<any>[]) { 

    let group: any = [];

    questions.forEach(question => {
        group['key'] = question.key;
        group['required'] = question.required;
        group['order'] = question.order;
        group['controlType'] = question.controlType;
        group['label'] = question.label;
        group['value'] = question.value;
        group['options'] = 
        [ 
          { "key": "32xse449-efdf-6162-88ed-3d6c7442343c", "value": "transgender" }, 
          { "key": "332aa449-efdf-6162-88ed-3d6c7442343c", "value": "homosexual" } 
        ];

    });

      return this.fb.group({
          value      : group['value'],
          key        : group['key'],
          label      : group['label'],
          required   : group['required'],
          order      : group['order'],
          controlType: group['controlType'],
          options    : new FormControl(group['options']),
          type       : group['type']
      });

  }//--toFormGroup

  toFormGroup(questions: QuestionBase<any>[]) { 
  let group: any = {};

    questions.forEach(question => {
      group[question.key] 
        = question.required ? new FormControl(question.value || '', Validators.required) 
                            : new FormControl(question.value || '');
    });
	return new FormGroup(group);
  }//--toFormGroup

  toFormGroupQuestionBase(section: Section) {
    return this.fb.group( {
        key  : section.key,
        name : section.name
    });
  }


  toFormGroupSection(section: Section) {
    return this.fb.group( {
        key  : section.key,
        name : section.name
    });
  }

  toFormGroupQuestion(question: Question){
    return this.fb.group({
        key        : [question.key],
        label      : [question.label],
        type       : [question.type],
        value      : [question.value],
        required   : [question.required],
        order      : [question.order],
        options    : [question.options]
    });
  }



}//--QuestionControlService
