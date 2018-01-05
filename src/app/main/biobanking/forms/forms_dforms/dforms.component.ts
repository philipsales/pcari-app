import { Component, OnInit, Output, Input, EventEmitter, OnChanges, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { Question, Form, Section } 
  from './../forms_detail/form-question.model';

import { FormQuestionService } 
  from './../forms_detail/form-question.service';
import { forms } 
  from './../forms_detail/form-question.model';

import { NotificationsService } from 'angular2-notifications';
import { KeyGenerator } from 'app/core/utils';

@Component({
  selector: 'app-dforms',
  templateUrl: './dforms.component.html',
  styleUrls: ['./dforms.component.css']
})
export class DformsComponent implements OnInit {


  private answerTemplateForm: FormGroup;
  private templateForm: FormGroup;
  private data: Form;
  private forms: Form;
  private payLoad = '';

  constructor(
    private fb: FormBuilder,
    private keyGenerator: KeyGenerator
  ) { }

  ngOnInit() {
    this.data = this.initForm();
    this.templateForm = this.toFormGroup(this.data);
    console.log('TEMPLATEFORM', this.templateForm);
    this.answerTemplateForm =  this.templateForm;
  }

  onSaveForm(form:Form){
    console.warn('templateForm', form);

  }

  toFormGroup(data: Form){
    return this.fb.group({
      id: data.id, 
      name: data.name 
    });
  }

  initForm(): Form {
    return forms;
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.templateForm.value);
  }//--onSubmit


}
