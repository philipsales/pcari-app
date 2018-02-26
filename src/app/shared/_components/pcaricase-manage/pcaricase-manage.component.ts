import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Form, Case, Answer, FormAnswer } from 'app/core/models';
import { CaseJSON } from 'app/core/interfaces';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

@Component({
  selector: 'app-pcaricase-manage',
  templateUrl: './pcaricase-manage.component.html',
  styleUrls: ['./pcaricase-manage.component.css']
})
export class PcaricaseManageComponent implements OnInit {

  private _resetcase: CaseJSON;
  private show_selected_forms = true;
  private status: any[];
  private _case: Case;
  @Input() set case(value: Case) {
    this._case = value;
    this._resetcase = this._case.toJSON();
    console.warn('HELLO!');
  }// -- _reinit setter
  private _medcases: string[];
  @Input() set medcases(value: string[]) {
    this._medcases = value;
    if (value) {
      console.warn(this._medcases, 'HELLO medcases!');
    } else {
      this._medcases = [];
    }
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filter(val))
    );
  }// -- _reinit setter

  @Input() method: string;
  @Input() update_url: string;
  @Input() view_url: string;
  @Input() forms: Form[];
  @Input() case_searchable: boolean;

  @Output() onSubmitCaseTrigger: EventEmitter<Case> = new EventEmitter();

  private errors: any = {};
  private has_errors = false;
  private is_processing = false;
  private is_adding_forms = false;
  private selected_forms: Form[];
  private options: string[];
  filteredOptions: Observable<string[]>;
  myControl: FormControl = new FormControl();

  constructor() {
    this.status = [
      { 'name': 'Active', 'key': true },
      { 'name': 'Inactive', 'key': false }
    ];
  }

  ngOnInit() {
    console.warn('halo!');
  }

  resetCase() {
    this._case = Case.fromJSON(this._resetcase);
  }

  onAddForm() {
    this.show_selected_forms = false;
    this.is_adding_forms = true;
  }

  filter(val: string): string[] {
    console.log('ewan');
    return this._medcases.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  onAddSelectedForm(forms: Form[]) {
    this.show_selected_forms = true;
    this.is_adding_forms = false;
    console.log(forms);
    for (const form of forms) {
      let answers: Answer[] = [];
      this._case.forms.push(new FormAnswer(form.id, form.name, false, answers));
    }
    console.log(this._case, 'CASE');
  }

  onCancelAddForm() {
    this.show_selected_forms = true;
    this.is_adding_forms = false;
  }

  onSubmitCase(case_for_save: Case) {
    console.log(case_for_save, 'CASE');
    this.onSubmitCaseTrigger.emit(case_for_save);
  }
}
