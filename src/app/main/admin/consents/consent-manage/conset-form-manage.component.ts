import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormArray, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Form } from 'app/core/models';

@Component({
  selector: 'app-conset-form-manage',
  templateUrl: './conset-form-manage.component.html',
  styleUrls: ['./conset-form-manage.component.css']
})
export class ConsetFormManageComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() consentForm: Form[];
  @Input() viewState: string;

  private _show: boolean;
  private is_adding_forms: boolean;

  constructor() {
    this._show = true;
    this.is_adding_forms = false;

  }

  ngOnInit() {
    console.log('SHIT', this.consentForm)
    console.log('VIEWSHIT', this.viewState)
  }

}
