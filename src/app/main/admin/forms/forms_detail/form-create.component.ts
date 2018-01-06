import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { KeyGenerator } from 'app/core/utils';

import { Router, NavigationExtras, ActivatedRoute, ParamMap } from '@angular/router';

import { 
  Question, 
  Form, 
  Section,
  RegType,
  Department 
  } from 'app/core/models';

import { FormService }          from 'app/core/services';
import { RegTypeService }       from 'app/core/services';
import { DepartmentService }    from 'app/core/services';
import { SharedDataService }    from 'app/core/services';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-form-question',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
}) 

export class FormCreateComponent implements OnInit {

  private templateForm: FormGroup;
  private data: Form;

  private registryTypes: RegType[];
  private departments: Department[];

  private formId: number;

  private errors: any = {};
  private has_errors = false;
  private hide_key = true ;
  private is_processing = false;

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private regTypeService: RegTypeService,
    private departmentService: DepartmentService,
    private notificationsService: NotificationsService,
    private route: ActivatedRoute,
    private router: Router,
    private sharedData: SharedDataService,
    private keyGenerator: KeyGenerator
  ) { 
  }

  ngOnInit() {

    this.getRegistryTypes();
    this.getDepartments();

    this.formId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.initForm(this.formId);
  }

  initForm(id:number) {

    if(id == 0){
      this.initCreateForm();
    }
    else {
      this.initUpdateForm(id);
    }
  }

  //TODO: Refractor default declaration
  initCreateForm(): void {
    let newForm: Form; 

    if(this.sharedData.getStorage()){
      newForm = this.sharedData.getStorage().form;
    }
    else {

      newForm = 
      {
        id: 0, 
        name: "Untitled form",
        type: "Patient Repository", 
        department: "General Surgery Department",
        sections: [
          {
            key: this.keyGenerator.create(),
            name: "Untitled section",
            order: 0,
            questions: []
          }
        ]
      };
    }

    this.data = newForm ;
    this.initTemplateFormGroup();

  }

  initUpdateForm(id: number): void {

    if(this.sharedData.getStorage()){
      this.data = this.sharedData.getStorage().form;
      this.initTemplateFormGroup();
    }
    else {
      this.formService
          .getForm(id)
          .subscribe(
            existingForm => {
              this.data = existingForm;
              this.initTemplateFormGroup();
            }
          );
    }
  }

  initTemplateFormGroup() {

    this.templateForm = this.toFormGroup(this.data);
  }

  //TODO: Refractor default declaration
  toFormGroup(data: Form){

    return this.fb.group({
      id: data.id, 
      name: data.name,
      type: data.type,
      department: data.department
    });
  }

  getRegistryTypes(){

    this.regTypeService
        .getRegTypes()
        .subscribe(
          regType => {
            this.registryTypes= regType;
          }
        );
  }

  getDepartments(){

    this.departmentService
        .getDepartments()
        .subscribe(
          departments => {
            this.departments = departments;
          }
        );
  }

  onAddSection(){

    this.data.sections.push({
      key: this.keyGenerator.create(),
      name: 'Untitled section',
      questions: []
    });
  }

  onSaveForm(inputForm: Form){
    this.errors = {};
    this.has_errors = false;
    this.is_processing = true;
  
    this.formService
        .submitForm(inputForm)
        .subscribe(created_question => {
          this.is_processing = false;
          console.warn(created_question, 'AYUS');

          this.notificationsService
              .success(
                'Form: ' + inputForm.name,
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

  }

  onPreviewForm(previewForm : Form, id: string){
     let params = { "form": previewForm }

     this.sharedData.setStorage(params);
     this.router.navigate([`./forms/preview/${id}`]);
  }
}
