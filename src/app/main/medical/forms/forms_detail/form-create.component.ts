import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { KeyGenerator } from 'app/core/utils';

import { FormControl, FormArray, FormGroup, Validators, FormBuilder } from '@angular/forms';
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
  private is_created = false;

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
    this.is_created = false;
    console.log('form-create');
    this.getRegistryTypes();
    this.getDepartments();
    this.getOrganizations();
    // this.organizations.push(new Organization('PGH'));
    this.initForm();
  }

  initForm() {
    if (this.sharedData.getStorage()) {
      console.log('Data from shared!');
      const data = this.sharedData.getStorage().form;
      this.data = Form.fromJSON(Form.fromAnyToJSON(data));
      this.templateForm = this.toFormGroup(this.data);
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
        '',
        '',
        '',
        '',
        sections
      );
      this.data = this.newForm;
      this.templateForm = this.toFormGroup(this.data);
    }
  }

  onChange(event) {
    console.log(event.target.value);
    this.data.name = event.target.value;
  }

  // TODO: Refractor default declaration
  toFormGroup(data: Form) {
    return this.fb.group({
      id: data.id,
      //name: data.name,
      //type: data.type,
      //organization: data.organization,
      //department: data.department
      name: [
        { value: data.name, disabled: false },
        Validators.required
      ],
      type: [
        { value: data.type, disabled: false },
        Validators.required
      ],
      organization: [
        { value: data.organization, disabled: false },
        Validators.required
      ],
      department: [
        { value: data.department, disabled: false },
        Validators.required
      ]
    });
  }

  getRegistryTypes() {
    this.regTypeService.getRegTypes().subscribe(
      regType => {
        this.registryTypes = regType;
      });
  }

  getDepartments() {
    this.departmentService.getDepartments().subscribe(
      departments => {
        this.departments = departments;
      });
  }

  getOrganizations() {
    this.organizationService.getAll().subscribe(
      organizations => {
        this.organizations = organizations;
      });
  }

  onAddSection() {
    const questions: Question[] = [];
    this.data.sections.push(new Section(
      this.keyGenerator.create(),
      'Untitled section',
      0,
      questions
    ));
  }

  onSaveForm(inputForm) {
    this.errors = {};
    this.has_errors = false;
    this.is_processing = true;

    if (this.templateForm.valid) {
      const data = Form.fromAnyToJSON(inputForm);
      this.formService.submitForm(data).subscribe(
        created_question => {
          this.is_processing = false;
          console.warn(created_question, 'AYUS');
          this.is_created = true;
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
        }, errors => {
          this.errors = errors;
          this.has_errors = true;
          this.is_processing = false;
          console.warn('errro');
          throw errors;
        });
    }
  }

  onPreviewForm(previewForm: Form, id: string) {
    const params = { 'form': previewForm };
    this.sharedData.setStorage(params);
    this.router.navigate([`/medical/forms/preview/${id}`]);
  }
}
