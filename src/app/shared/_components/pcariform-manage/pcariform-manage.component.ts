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
  _name: any;
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
  }

  ngOnInit() {
  }

  private toFormGroup(data: any) {
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
      dir_path: [{ value: data.dir_path, disabled: false }]
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


  @ViewChild("fileInput") fileInput;

  onSaveForm(updated_form: Form) {
    console.log("new Update", updated_form);
    let fi = this.fileInput.nativeElement;
    let formModel = new FormData();

    if (fi.files && fi.files[0]) {
      formModel = fi.files[0];
      updated_form.dir_path = fi.files[0].name;
      updated_form.file = formModel;
    }

    this.onSubmitTrigger.emit(updated_form);
  }

  onChangeFile() {
    console.log('new file');
    let fi = this.fileInput.nativeElement;
    let formModel = new FormData();
    this._form.dir_path = fi.files[0].name;
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


  onSubmit() {
    console.log('this._name', this._name);

    //const formModel = this.prepareSave();

    let fi = this.fileInput.nativeElement;
    let formModel = new FormData();

    if (fi.files && fi.files[0]) {
      formModel = fi.files[0];
      console.log(fi.files[0]);
      console.log('FOMR MODEL', formModel);
    }

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

}
