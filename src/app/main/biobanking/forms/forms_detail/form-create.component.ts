import { Component, OnInit, Output, Input, EventEmitter, OnChanges, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { Question, Form, Section } from './form-question.model';

import { FormQuestionService } from './form-question.service';
import { forms } from './form-question.model';

import { NotificationsService } from 'angular2-notifications';
import { KeyGeneratorService } from 'app/core/services';

@Component({
  selector: 'app-form-question',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
}) 

export class FormCreateComponent implements OnInit {

  //private forms: Form[] = [];
  private forms: Form;

  private selectedDepartment: number;
  private departmentCount: number;

  private sections: Section[];

  private selectedQuestion: Question[]=[];
  private questions: Question[]=[];

  private data: Form;
  private templateForm: FormGroup;

  private errors: any = {};
  private has_errors = false;
  private hide_key = true ;
  private is_processing = false;


  constructor(
    private fb: FormBuilder,
    private cdRef: ChangeDetectorRef,
    private questionService: FormQuestionService,
    private _notificationsService: NotificationsService,
    private keyGenerator: KeyGeneratorService
  ) { 
  }

  ngOnInit() {
    this.data = this.initForm();
    this.templateForm = this.toFormGroup(this.data);
  }

  toFormGroup(data: Form){
    return this.fb.group({
      id: data.id, 
      name: data.name 
    });
  }

  initForm(): Form {
    const form: Form = 
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
    return form;
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
  
    this.questionService
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


  onSelectForm(index: number) {
    this.sections = this.forms[index].sections;
  }

  onSelectSection(index: number) {
    this.questions = this.sections[index].questions;
    this.selectedQuestion = this.questions;
    this.selectedDepartment=index;
  }

  public onSelectQuestion(question: any): void {
    console.log('--sectionHander',question);
    console.log(typeof question);
    this.questions = question;
  }




  

}
