import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { KeyGenerator } from 'app/core/utils';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { Question, Form, Section } from 'app/core/models';

import { FormService } from 'app/core/services';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-form-question',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
}) 

export class FormCreateComponent implements OnInit {
  private forms: Form;

  private selectedDepartment: number;
  private departmentCount: number;

  private sections: Section[];

  private selectedQuestion: Question[]=[];
  private questions: Question[]=[];

  private data: Form;
  private templateForm: FormGroup;

  private formId: number;

  private errors: any = {};
  private has_errors = false;
  private hide_key = true ;
  private is_processing = false;

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private _notificationsService: NotificationsService,
    private route: ActivatedRoute,
    private keyGenerator: KeyGenerator
  ) { 
  }

  ngOnInit() {
    this.formId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.initForm(this.formId);
  }

  initForm(id:number) {

    if(id == 0){
      //create
      this.initCreateForm();
    }
    else {
      //update
      this.initUpdateForm(id);
    }
  }

  initCreateForm(): void {

    //TODO: generate ID

    const newForm: Form = 
    {
      id: 0, 
      name: "Untitled Form",
      sections: [
        {
          key: "",
          name: "Untitled section",
          order: 0,
          questions: []
        }
      ]
    };

    this.data = newForm;
    this.initTemplateFormGroup();
  }

  initUpdateForm(id: number): void {

    //SERVICE with get index
    this.formService
        .getForm(id)
        .subscribe(
          existingForm => {
            console.log('-actual service',existingForm);
            this.data = existingForm;
            this.initTemplateFormGroup();
          }
        );
  }

  initTemplateFormGroup() {
    this.templateForm = this.toFormGroup(this.data);
  }

  toFormGroup(data: Form){
    return this.fb.group({
      id: data.id, 
      name: data.name 
    });
  }

  onAddSection(){
    this.data.sections.push({
      key: this.keyGenerator.create(),
      name: 'Untitled section',
      questions: []
    });
  }

  onSaveForm(input_form: Form){

    this.errors = {};
    this.has_errors = false;
    this.is_processing = true;
  
    this.formService
        .submitForm(input_form)
        .subscribe(created_question => {
          this.is_processing = false;
          console.warn(created_question, 'AYUS');

          this._notificationsService
              .success(
                'Form: ' + input_form.name,
                'Successfully Saved.', 
                {
                  timeOut: 10000,
                  showProgressBar: true,
                  pauseOnHover: false,
                  clickToClose: false
                }
              )
        },
        errors => {
          this.errors = errors;
          this.has_errors = true;
          this.is_processing = false;
          console.warn('errro');
          throw errors
        });

    console.log('--tempalteForm--',input_form);
  }




  

}
