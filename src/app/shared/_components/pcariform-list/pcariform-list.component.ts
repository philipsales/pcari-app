import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Form } from 'app/core/models';
import { FormService } from '../../../core/services';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-pcariform-list',
  templateUrl: './pcariform-list.component.html',
  styleUrls: ['./pcariform-list.component.css']
})
export class PcariformListComponent implements OnInit {

  @Input() create_url: string;
  @Input() update_url: string;
  private _forms: Form[];
  @Input() set forms(value: Form[]) {
    this._forms = value;
    console.log(this._forms);
    console.warn('HELLO!');
  }// -- setter for forms
  private _date_today;
  private for_delete: Form;
  private is_processing = false;

  @Output() deleteFormEvent: EventEmitter<Form> = new EventEmitter();

  constructor(
    private formService: FormService,
    private notificationsService: NotificationsService,
    private router: Router
  ) { }

  ngOnInit() {
    this._date_today = Date.now();
    console.log(this._date_today);
  }

  setCurrentForm(form: Form) {
    this.formService.currentForm = form;
    this.router.navigate([this.update_url]);
  }

  callDeleteForm(for_delete: Form) {
    this.for_delete = for_delete;
  }

  confirmDelete(event: Form) {
    console.log('show please');
    this.for_delete = event;
  }

  onConfirmDeleteForm(proceed_delete: boolean) {
    console.warn(proceed_delete, 'ANSWER');
    if (proceed_delete) {
      this.deleteForm(this.for_delete);
    }
    this.for_delete = undefined;
  }

  deleteForm(for_delete: Form) {
    console.log(for_delete, 'FORM FOR DELETE');
    this.formService.delete(for_delete).subscribe(
      updated_form => {
        console.warn(updated_form, 'AYUS');
        this.is_processing = false;
        this._forms = this._forms.filter((form: Form) => form.id !== updated_form.id);
        this.notificationsService
          .success(
            'Form: ' + updated_form.name,
            'Successfully Deleted.',
            {
              timeOut: 10000,
              showProgressBar: true,
              pauseOnHover: false,
              clickToClose: false
            });
            this.router.navigate(['/medical/medforms']);
      }, errors => {
        this.is_processing = false;
        console.warn('error');
        throw errors;
      });
  }
}
