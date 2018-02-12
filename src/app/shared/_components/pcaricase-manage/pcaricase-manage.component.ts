import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Form, Case, Answer, FormAnswer } from 'app/core/models';
import { CaseJSON } from 'app/core/interfaces';

@Component({
  selector: 'app-pcaricase-manage',
  templateUrl: './pcaricase-manage.component.html',
  styleUrls: ['./pcaricase-manage.component.css']
})
export class PcaricaseManageComponent implements OnInit {

  private _resetcase: CaseJSON;
  private show_selected_forms = true;
  private _case: Case;
  private status: any[];
  @Input() set case(value: Case) {
    this._case = value;
    this._resetcase = this._case.toJSON();
    console.warn('HELLO!');
  }// -- _reinit setter

  @Input() method: string;
  @Input() update_url: string;
  @Input() view_url: string;
  @Input() forms: Form[];

  @Output() onSubmitCaseTrigger: EventEmitter<Case> = new EventEmitter();

  private errors: any = {};
  private has_errors = false;
  private is_processing = false;
  private is_adding_forms = false;
  private selected_forms: Form[];

  constructor() {
    this.status = [
      { 'name': 'Active', 'key': true },
      { 'name': 'Inactive', 'key': false }
    ];
  }

  ngOnInit() {
  }

  resetCase() {
    this._case = Case.fromJSON(this._resetcase);
  }

  onAddForm() {
    this.show_selected_forms = false;
    this.is_adding_forms = true;
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
