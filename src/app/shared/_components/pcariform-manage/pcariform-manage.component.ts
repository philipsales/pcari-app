import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Form, Section, Question, RegType, Department, Organization } from 'app/core/models';
import { OrganizationService, DepartmentService, RegTypeService } from 'app/core/services';

import { KeyGenerator } from 'app/core/utils';

@Component({
  selector: 'app-pcariform-manage',
  templateUrl: './pcariform-manage.component.html',
  styleUrls: ['./pcariform-manage.component.css']
})
export class PcariformManageComponent implements OnInit {

  @Input() method: string;
  @Input() withconsent: boolean;
  @Input() registryTypes: RegType[];
  @Input() departments: Department[];
  @Input() organizations: Organization[];

  private _form: Form;
  @Input() set form(value: Form) {
    this._form = value;
    this.templateForm = this.toFormGroup(this._form);
    console.warn(this._form, 'HELLO!');
  }// -- setter for forms

  private templateForm: FormGroup;
  private status: any[];

  private errors: any = {};
  private has_errors = false;
  private hide_key = true;
  private is_processing = false;
  private is_created = false;

  constructor(
    private fb: FormBuilder,
    private keyGenerator: KeyGenerator
  ) {
    this.status = [
      { 'name': 'Pending', 'key': 'Pending' },
      { 'name': 'Approved', 'key': 'Approved' }
    ];
  }

  ngOnInit() {
  }

  private toFormGroup(data: Form) {
    return this.fb.group({
      id: data.id,
      name: [
        { value: data.name, disabled: false },
        Validators.required
      ],
      status: [
        { value: data.status, disabled: false },
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

  onAddSection() {
    this._form.sections.push(new Section(
      this.keyGenerator.create(),
      'Untitled section',
      0,
      []
    ));
  }

  onChange(event) {
    console.log(event.target.value);
    this._form.name = event.target.value;
  }
}
