import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Form, Section, Question } from 'app/core/models';

@Component({
  selector: 'app-pcariform-manage',
  templateUrl: './pcariform-manage.component.html',
  styleUrls: ['./pcariform-manage.component.css']
})
export class PcariformManageComponent implements OnInit {

  private templateForm: FormGroup;
  private data: Form;

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.initNewForm();
  }

  initNewForm() {
    this.data = new Form(
      '',
      '',
      '',
      '',
      '',
      [
        new Section(
        null,
        'Untitled section',
        0,
        [])
      ]
    );
    this.templateForm = this.toFormGroup(this.data);
  }

  toFormGroup(data: Form) {
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
}
