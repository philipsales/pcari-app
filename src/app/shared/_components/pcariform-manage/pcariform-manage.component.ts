import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Form, Section, Question, RegType, Department, Organization } from 'app/core/models';
import { OrganizationService, DepartmentService, RegTypeService, CaseService } from 'app/core/services';

import { KeyGenerator } from 'app/core/utils';

@Component({
  selector: 'app-pcariform-manage',
  templateUrl: './pcariform-manage.component.html',
  styleUrls: ['./pcariform-manage.component.css']
})

/*
export class FileUpload {
  id: number;
  avatar: string | any;
}
*/

export class PcariformManageComponent implements OnInit {

  formUpload: FormGroup;
  loading: boolean = false;

  @Input() method: string;
  @Input() withconsent: boolean;
  @Input() registryTypes: RegType[];
  @Input() departments: Department[];
  @Input() organizations: Organization[];
  @Input() is_created: boolean;
  @Input() is_processing = false;

  private _form: Form;
  @Input() set form(value: Form) {
    this._form = value;
    this.templateForm = this.toFormGroup(this._form);
    console.warn(this._form, 'HELLO!');
  }// -- setter for forms

  @Output() onSubmitTrigger: EventEmitter<Form> = new EventEmitter();

  private templateForm: FormGroup;
  private status: any[];

  private errors: any = {};
  private has_errors = false;
  private hide_key = true;

  constructor(
    private fb: FormBuilder,
    private keyGenerator: KeyGenerator,
    private caseService: CaseService
  ) {
    this.status = [
      { 'name': 'Pending', 'key': 'Pending' },
      { 'name': 'Approved', 'key': 'Approved' }
    ];

    this.createForm();
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
      ],
      validity_date: [
        { value: data.validity_date, disabled: false },
        Validators.required
      ],
      dir_path: [
        { value: data.dir_path, disabled: false },
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

  onSaveForm(updated_form: Form) {
    console.log("new Update", updated_form);
    this.onSubmitTrigger.emit(updated_form);
  }

  onUploadTemplate(path: string) {
    this.caseService
      .upload(path)
      .subscribe(upload => {
        console.log(upload)
      },
      errors => {
        this.errors = errors;
        this.has_errors = true;
        this.is_processing = false;
      }
      );

    console.log('upload: ', this._form.dir_path);
    console.log('upload: ', this._form);
    console.log('upload: ', path);

  }

  createForm() {
    this.formUpload = this.fb.group({
      name: ['', Validators.required],
      avatar: null
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      this.formUpload.get('avatar').setValue(file);
    }
  }

  private prepareSave(): any {
    let input = new FormData();
    input.append('name', this.formUpload.get('name').value);
    input.append('avatar', this.formUpload.get('avatar').value);
    return input;
  }

  onSubmit() {
    const formModel = this.prepareSave();
    this.loading = true;
    // In a real-world app you'd have a http request / service call here like
    // this.http.post('apiUrl', formModel)
    this.caseService
      .upload(formModel)
      .subscribe(upload => {
        console.log(upload)
        this.loading = false;
      },
      errors => {
        this.errors = errors;
        this.has_errors = true;
        this.is_processing = false;
      }
      );

  }

  clearFile() {
    this.formUpload.get('avatar').setValue(null);
    //this.fileInput.nativeElement.value = '';
  }




}
