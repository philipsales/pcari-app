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
  selector: 'app-bioforms-create',
  templateUrl: './bioforms-create.component.html',
  styleUrls: ['./bioforms-create.component.css']
})
export class BioformsCreateComponent implements OnInit {

  new_form: Form;
  method = "CREATE";

  registryTypes: RegType[];
  departments: Department[];
  organizations: Organization[];
  is_created = false;
  is_processing = false;

  constructor(
    private keyGenerator: KeyGenerator,
    private regTypeService: RegTypeService,
    private departmentService: DepartmentService,
    private organizationService: OrganizationService,
    private formService: FormService,
    private notificationsService: NotificationsService,
    private router: Router
  ) {
    if (this.formService.currentForm) {
      console.log('BACK TO CREATE');
      this.new_form = this.formService.currentForm;
    } else {
      console.log('COMPLETELY NEW');
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

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    form_to_submit.created_by = currentUser.username;

    const data = form_to_submit.toJSON();
    this.formService
      .submitForm(data)
      .subscribe(
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
