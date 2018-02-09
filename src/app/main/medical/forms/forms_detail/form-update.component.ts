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
import { FormJSON } from '../../../../core/interfaces';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css']
})
export class FormUpdateComponent implements OnInit {

  private templateForm: FormGroup;
  private data: Form;
  private data2: FormJSON;

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

    this.formId = this.route.snapshot.paramMap.get('id');
    this.initForm(this.formId);
  }

  initForm(id) {
    this.initUpdateForm(id);
  }

  onChange(event) {
    console.log(event.target.value);
    this.data.name = event.target.value;
  }

  initUpdateForm(id: string): void {
    console.log('initUpdate');
    if (this.sharedData.getStorage()) {
      console.log('From shared!');
      this.data = this.sharedData.getStorage().form;
      this.initTemplateFormGroup();
    } else {
      this.formService.getForm(id).subscribe(
        (existingForm: Form) => {
          console.log('From service!');
          this.data = existingForm;
          this.data2 = existingForm.toJSON();
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
    this.regTypeService.getRegTypes().subscribe(
      regType => {
        this.registryTypes = regType;
      }
    );
  }

  getDepartments() {
    this.departmentService.getDepartments().subscribe(
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
  }

  onSaveForm(inputForm) {
    this.errors = {};
    this.has_errors = false;
    this.is_processing = true;
    let data = Form.fromAnyToJSON(inputForm);

    this.formService
      .updateForm(data)
      .subscribe(updated_question => {
        this.is_processing = false;
        console.warn(updated_question, 'AYUS');

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
