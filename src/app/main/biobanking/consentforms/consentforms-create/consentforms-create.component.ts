import { Component, OnInit } from '@angular/core';
import { Form, Section, RegType, Department, Organization } from 'app/core/models';

import { KeyGenerator } from 'app/core/utils';
import { OrganizationService, DepartmentService, RegTypeService } from 'app/core/services';

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

  constructor(
    private keyGenerator: KeyGenerator,
    private regTypeService: RegTypeService,
    private departmentService: DepartmentService,
    private organizationService: OrganizationService
  ) {
    this.new_form = new Form(
      '',
      '',
      '',
      '',
      '',
      [
        new Section(
        this.keyGenerator.create(),
        'Untitled section',
        0,
        [])
      ]
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
}
