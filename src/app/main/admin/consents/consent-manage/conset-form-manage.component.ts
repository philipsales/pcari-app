import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormArray, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Form, Consent } from 'app/core/models';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-conset-form-manage',
  templateUrl: './conset-form-manage.component.html',
  styleUrls: ['./conset-form-manage.component.css']
})
export class ConsetFormManageComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() consentForm: Form[];
  @Input() viewState: string;
  @Input() datasource: any;

  private _show: boolean;
  private is_adding_forms: boolean;
  private displayedColumns: string[] = [];

  private show_selected_forms = true;

  @Output() onCallSelectFormTrigger: EventEmitter<null> = new EventEmitter();



  constructor() {
    this._show = true;
    this.is_adding_forms = false;

  }

  ngOnInit() {

    this.displayedColumns = ['name', 'dateCreated', 'organization'];
    console.log('SHIT', this.consentForm)
    console.log('VIEWSHIT', this.viewState)
  }

  onAddForm() {
    console.log('consent-form-manage onAddForm');
    this.onCallSelectFormTrigger.emit();
  }

  onAddSelectedForm(form: Form[]) {

    /*
    this.show_selected_forms = true;
    this.is_adding_forms = false;
    console.log(forms);
    for (const form of forms) {
      let answers: Answer[] = [];
      this._case.forms.push(new FormAnswer(form.id, form.name, answers));
    }
    */
    console.log(form, 'SElect Form');
  }

}
