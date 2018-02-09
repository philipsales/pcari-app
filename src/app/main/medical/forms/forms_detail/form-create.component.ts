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
  RegType,
  Option
} from 'app/core/models';

import { FormService } from 'app/core/services';
import { OrganizationService } from 'app/core/services';
import { RegTypeService } from 'app/core/services';
import { DepartmentService } from 'app/core/services';
import { SharedDataService } from 'app/core/services';
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

  private formId: string;

  private errors: any = {};
  private has_errors = false;
  private hide_key = true;
  private is_processing = false;

  private newForm: Form;
  private status: any[];

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
    //TODO: make in API or dummy api
    this.status = [
      { "name": "Pending", "key": "Pending" },
      { "name": "Approved", "key": "Approved" }
    ];
  }

  ngOnInit() {

    console.log('form-create');
    this.getRegistryTypes();
    this.getDepartments();
    this.getOrganizations();

    this.initForm();
  }

  initForm() {
    this.initCreateForm();
  }

  // TODO: Refractor default declaration
  initCreateForm(): void {
    if (this.sharedData.getStorage()) {
      const old_form: Form = <Form>this.sharedData.getStorage().form;
      const sections: Section[] = [];
      if (old_form.sections) {
        old_form.sections.forEach((section) => {
          const questions: Question[] = [];
          if (section.questions) {
            section.questions.forEach((question) => {
              questions.push(new Question(
                question.key,
                question.label,
                question.type,
                question.value,
                question.required,
                question.order,
                question.options
              ));
            });
          }

          sections.push(new Section(
            section.key,
            section.name,
            section.order,
            questions
          ));
        });
      }

      this.newForm = new Form(
        old_form.name,
        old_form.organization,
        old_form.department,
        old_form.type,
        old_form.status,
        sections
      );

      console.warn(this.newForm.toJSON(), 'SILIPIN MO KO!');

    } else {

      const sections: Section[] = [];
      const questions: Question[] = [];
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
        'Pending',
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

    this.data = this.newForm;
    this.initTemplateFormGroup();

  }

  onChange(event) {
    console.log(event.target.value);
    this.data.name = event.target.value;
  }

  initUpdateForm(id: string): void {
    console.log('initUpdate');
    if (this.sharedData.getStorage()) {
      this.data = this.sharedData.getStorage().form;
      this.initTemplateFormGroup();
    } else {
      this.formService.getForm(id)
        .subscribe(existingForm => {
          this.data = existingForm;
          this.initTemplateFormGroup();
        });
    }
  }

  initTemplateFormGroup() {

    console.log('initTemplateFormGroup');
    this.templateForm = this.toFormGroup(this.data);
  }

  // TODO: Refractor default declaration
  toFormGroup(data: Form) {
    return this.fb.group({
      id: data.id,
      name: data.name,
      status: data.status,
      type: data.type,
      organization: data.organization,
      department: data.department
    });
  }

  getRegistryTypes() {

    this.regTypeService
      .getRegTypes()
      .subscribe(
      regType => {
        this.registryTypes = regType;
      }
      );
  }

  getDepartments() {

    this.departmentService
      .getDepartments()
      .subscribe(
      departments => {
        this.departments = departments;
      }
      );
  }

  getOrganizations() {

    this.organizationService
      .getAll()
      .subscribe(
      organizations => {
        this.organizations = organizations;
      }
      );
  }

  onAddSection() {

    const questions: Question[] = [];
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

  onSaveForm(inputForm) {
    this.errors = {};
    this.has_errors = false;
    this.is_processing = true;
    let data = Form.fromAnyToJSON(inputForm);
    // console.warn(inputForm, 'CHECK ME!');
    // console.warn(this.newForm.toJSON(), 'NA-EDIT');
    // console.warn(JSON.stringify(this.newForm.toJSON()), 'NA-EDIT2');
    // this.formService
    //    .checkForm(inputForm);

    console.log(this.data);

    this.formService
      .submitForm(data)
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
          });
      },
      errors => {
        this.errors = errors;
        this.has_errors = true;
        this.is_processing = false;
        console.warn('errro');
        throw errors;
      });
  }

  onPreviewForm(previewForm: Form, id: string) {
    const params = { 'form': previewForm };

    this.sharedData.setStorage(params);
    this.router.navigate([`/medical/forms/preview/${id}`]);
  }
}
