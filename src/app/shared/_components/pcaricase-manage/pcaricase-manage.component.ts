import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Form, Case, Answer, FormAnswer } from 'app/core/models';
import { CaseJSON } from 'app/core/interfaces';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-pcaricase-manage',
  templateUrl: './pcaricase-manage.component.html',
  styleUrls: ['./pcaricase-manage.component.css']
})
export class PcaricaseManageComponent implements OnInit {

  _resetcase: CaseJSON;
  show_selected_forms = true;
  status: any[];
  _case: Case;

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
  @Input() show_icd: boolean;

  @Output() onSubmitCaseTrigger: EventEmitter<Case> = new EventEmitter();
  @Output() onShowICDTrigger: EventEmitter<any> = new EventEmitter();

  errors: any = {};
  has_errors = false;
  is_processing = false;
  is_adding_forms = false;
  selected_forms: Form[];
  options: string[];
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

  onShowICD() {
    console.log("ICD SHOW");
    this.onShowICDTrigger.emit();
    this.show_icd = true;
  }

  onHideICD() {
    this.show_icd = false;
  }
  onSelectDiagnosis(selected) {
    this._case.diagnosis = selected.diagnosis_name;
    this.show_icd = false;
  }

}
