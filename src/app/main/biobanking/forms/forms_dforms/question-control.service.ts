//builtin
import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder }  from '@angular/forms';

//custom
import { QuestionBase } from './question-base';

import { Question, Form, Section } from './../forms_detail/form-question.model';

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
        group['options'] = { key: '32432432', value: 'male'};
    });

      return this.fb.group({
          value      : group['value'],
          key        : group['key'],
          label      : group['label'],
          required   : group['required'],
          order      : group['order'],
          controlType: group['controlType'],
          type       : group['type'],
          options    : group['options']
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

  /*
  toFormGroupOption(option: Option) {
    return this.fb.group( {
        key  : option.key,
        name : option.name
    });
  }
  */

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
