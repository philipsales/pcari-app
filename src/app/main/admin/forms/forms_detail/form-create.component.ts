import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { KeyGenerator } from 'app/core/utils';

import { Router, NavigationExtras, ActivatedRoute, ParamMap } from '@angular/router';

import { 
  Question, 
  Form, 
  Section,
  Organization, 
  Department,
  RegType
  } from 'app/core/models';

import { FormService }          from 'app/core/services';
import { OrganizationService }  from 'app/core/services';
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
  private organizations: Organization[] = [];

  private formId: number;

  private errors: any = {};
  private has_errors = false;
  private hide_key = true ;
  private is_processing = false;

  private newForm: Form;

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private regTypeService: RegTypeService,
    private departmentService: DepartmentService,
    private organizationService: OrganizationService,
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
    // TO DO:
    //this.getOrganizations();
    this.organizations.push(new Organization('PGH'));
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
    if(this.sharedData.getStorage()){
      this.newForm = this.sharedData.getStorage().form;
    }
    else {

      let sections : Section[] = [];
      let questions : Question[] = [];
      sections.push(new Section(
        this.keyGenerator.create(),
        'Untitled section',
        0,
        questions
      ));
      this.newForm = new Form(
        'Untitled form',
        'University of the Philippines - Philippine General Hospital',
        'General Surgery Department',
        'Patient Repository',
        sections
      );

      console.warn(this.newForm.toJSON(), 'SILIPIN MO KO!');
/*
      newForm = {
        id: 0, 
        name: "Untitled form",
        type: "Patient Repository", 
        organization: "University of the Philippines - Philippine General Hospital", 
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
      */
    }

    this.data = this.newForm ;
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
      organization : data.organization,
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

  getOrganizations(){

    this.organizationService
        .getOrganizations()
        .subscribe(
          organizations => {
            this.organizations = organizations;
          }
        );
  }

  onAddSection(){

    let questions: Question[] = [];
    this.data.sections.push(new Section(
        this.keyGenerator.create(),
        'Untitled section',
        0,
        questions
      ));

    /*
    this.data.sections.push({
      key: this.keyGenerator.create(),
      name: 'Untitled section',
      questions: []
    });
    */
  }

  onSaveForm(inputForm: Form){
    this.errors = {};
    this.has_errors = false;
    this.is_processing = true;
  
    console.warn(inputForm, 'CHECK ME!');
    console.warn(this.newForm.toJSON(), 'NA-EDIT');
    console.warn(JSON.stringify(this.newForm.toJSON()), 'NA-EDIT2');
    //this.formService
    //    .checkForm(inputForm);
    
    this.formService
        .submitForm(this.newForm.toJSON())
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
