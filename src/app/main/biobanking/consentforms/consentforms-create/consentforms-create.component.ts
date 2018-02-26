import { Component, OnInit } from '@angular/core';
import { Form, Section, RegType, Department, Organization } from 'app/core/models';

import { KeyGenerator } from 'app/core/utils';
import { NotificationsService } from 'angular2-notifications';

import {
  OrganizationService,
  DepartmentService,
  RegTypeService,
  FormService
} from 'app/core/services';

import { environment } from 'environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consentforms-create',
  templateUrl: './consentforms-create.component.html',
  styleUrls: ['./consentforms-create.component.css']
})
export class ConsentformsCreateComponent implements OnInit {

  private new_form: Form;
  private registryTypes: RegType[];
  private departments: Department[];
  private organizations: Organization[];
  private is_created = false;
  private is_processing = false;

  constructor(
    private keyGenerator: KeyGenerator,
    private regTypeService: RegTypeService,
    private departmentService: DepartmentService,
    private organizationService: OrganizationService,
    private formService: FormService,
    private notificationsService: NotificationsService,
    private router: Router
  ) {
    this.new_form = new Form(
      '',
      environment.ORG_BIOBANK,
      environment.DEPT_BIOBANK,
      environment.FORM_TYPE_BIOBANK,
      'Pending',
      [
        new Section(
          this.keyGenerator.create(),
          'Untitled section',
          0,
          [])
      ],
      new Date(),
      ''
    );
    this.getRegistryTypes();
    this.getDepartments();
    this.getOrganizations();
  }

  ngOnInit() {
  }

  private getRegistryTypes() {
    this.regTypeService.getRegTypes().subscribe(
      regType => {
        this.registryTypes = regType;
      });
  }

  private getDepartments() {
    this.departmentService.getDepartments().subscribe(
      departments => {
        this.departments = departments;
      });
  }

  private getOrganizations() {
    this.organizationService.getAll().subscribe(
      organizations => {
        this.organizations = organizations;
      });
  }

  onSubmitTrigger(form_to_submit: Form) {
    this.is_processing = true;
    console.log(form_to_submit, '===SUBMITTING===');
    const data = form_to_submit.toJSON();
    this.formService.submitForm(data).subscribe(
      created_question => {
        console.warn(created_question, 'AYUS');
        this.is_processing = false;
        this.is_created = true;
        this.notificationsService
          .success(
            'Form: ' + data.name,
            'Successfully Saved.',
            {
              timeOut: 10000,
              showProgressBar: true,
              pauseOnHover: false,
              clickToClose: false
            });
            this.router.navigate(['/biobanking/forms']);
      }, errors => {
        this.is_processing = false;
        console.warn('error');
        throw errors;
      });

  }
}
