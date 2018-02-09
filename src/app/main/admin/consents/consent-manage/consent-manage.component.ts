import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras, ActivatedRoute, ParamMap } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

import { ConsentService } from "app/core/services";
import { Consent, Form } from 'app/core/models';
import { ConsentJSON } from 'app/core/interfaces';
import { DatePipe } from '@angular/common';

import { Observable } from 'rxjs/Observable';

import { GenericErrorStateMatcher } from 'app/shared/_material/material.error';
import { ErrorStateMatcher } from '@angular/material/core';

import { FormControl, FormArray, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-consent-manage',
  templateUrl: './consent-manage.component.html',
  styleUrls: ['./consent-manage.component.css']
})
export class ConsentManageComponent implements OnInit {

  private consent_id: string;
  private consent: Consent;
  private consentFormGroup: FormGroup;
  private consentFormMappingGroup: FormGroup;

  private errors: any = {};
  private error_matcher: ErrorStateMatcher;
  private has_errors = false;
  private is_processing = false;

  private state_view: string;
  private view: string;
  private formArray: FormArray;

  private forms: Form[] = [];

  //private datasource: any;
  private datasource: MatTableDataSource<Form>;

  private show_selected_forms: boolean;

  private is_adding_forms: boolean;
  private data: Form;

  private validity_date: Date = new Date();

  constructor(
    private _notificationsService: NotificationsService,
    private consentService: ConsentService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) {
    this.error_matcher = new GenericErrorStateMatcher();

    this.formArray = new FormArray([]);
    this.initializeFormGroup();
  }

  ngOnInit() {
    this.errors = {};
    this.has_errors = false;
    this.is_processing = false;

    this.show_selected_forms = true;

    this.is_adding_forms = false;
    this.consent_id = this.route.snapshot.paramMap.get('id');
    this.state_view = this.route.snapshot.url[0].path;

    //this.initConsentFormGroup();
    //this.initializeFormGroup();

    if (this.state_view == 'create') {
      this.saveConsent();
    }
    else if (this.state_view === 'update') {
      this.updateConsent();
    }
    else if (this.state_view == 'view') {
      this.viewConsent();
    }



  }

  initializeFormGroup() {
    this.consent = new Consent('', '', '', '', '', '', new Date());
    this.consentFormGroup = this.toFormGroup(this.consent);
  }


  toFormGroup(data: Consent) {
    let input;
    if (this.state_view == 'view')
      input = true;
    else
      input = false

    return this.fb.group({
      name: [
        { value: data.name, disabled: input },
        Validators.required
      ],
      validity_date: [
        { value: data.validity_date, disabled: input },
        Validators.required
      ],
      number:
        { value: data.number, disabled: input },
      description:
        { value: data.description, disabled: input },
    });
  }

  saveConsent() {
  }

  onAddSelectedForm(selected_forms: Form[]) {
    this.show_selected_forms = true;
    this.is_adding_forms = false;

    this.consentFormGroup.addControl('forms', new FormArray([]));

    for (const form of selected_forms) {
      (<FormArray>this.consentFormGroup.get('forms')).push(this.toConsentFormGroupNew(form));
    }
    this.datasource = new MatTableDataSource(this.consentFormGroup.get('forms').value);
  }

  toConsentFormGroupNew(data: Form) {
    return this.fb.group({
      _id: data.id,
      name: data.name,
      organization: data.organization,
      date_created: Date.now()
    });
  }

  onSaveClick(input_consent: Consent) {
    this.is_processing = true;

    this.consentService
      .create(input_consent)
      .subscribe(
      saved_consent => {
        this.notificationPrompt(saved_consent);
      },
      errors => {
        this.errors = errors;
        this.has_errors = true;
        this.is_processing = false;
      }
      );
  }

  updateConsent() {
    this.getConsentAsync().then(
      (result) => {
        this.initConsentFormGroupOnUpdate();
      }
    );
  }

  getConsentAsync() {
    var promise = new Promise((resolve, reject) => {
      this.consentService
        .getConsent(this.consent_id)
        .subscribe(consent => {
          this.consent = consent;
          resolve(consent);
        });
    });
    return promise;
  }

  getConsent() {
    this.consentService
      .getConsent(this.consent_id)
      .subscribe(consent => {
        this.consent = consent;
      },
      errors => {
        this.errors = errors;
        this.has_errors = true;
        this.is_processing = false;
      }
      );
  }

  initConsentFormGroupOnUpdate() {

    this.consentFormGroup = this.toFormGroup(this.consent);
    this.consentFormGroup.addControl('forms', new FormArray([]));


    for (const form of this.consent.forms) {
      console.log('iterate: ', form);

      this.data = new Form(
        form.name,
        form.organization,
        form.department,
        form.type,
        form.status,
        [],
        form.date_created
      );

      this.forms.push(this.data);
      this.consentFormMappingGroup = this.toConsentFormMappingFormGroup(this.data);
      (<FormArray>this.consentFormGroup.get('forms')).push(this.toConsentFormMappingFormGroup(this.data));
    }
    console.log('after terate: ', this.forms);

    this.datasource = new MatTableDataSource(this.consentFormGroup.get('forms').value);

  }

  toConsentFormMappingFormGroup(data: Form) {

    return this.fb.group({
      _id: data.id,
      name: data.name,
      department: data.department,
      organization: data.organization,
      type: data.type,
      date_created: data.date_created
    });
  }

  viewConsent() {
    this.getConsentAsync().then(
      (result) => {
        this.initConsentFormGroupOnUpdate();
      }
    );
  }

  onUpdateClick(input_consent: Consent) {
    this.consentService
      .update(this.consent_id, input_consent)
      .subscribe(
      updated_consent => {
        this.notificationPrompt(updated_consent);
      },
      errors => {
        this.errors = errors;
        this.has_errors = true;
        this.is_processing = false;
      }
      );
  }

  onResetClick() {
    this.is_processing = false;
    this.errors = '';
    this.has_errors = false;
    this.is_processing = false;
    this.consent = new Consent('', '', '', '', '', '', new Date);
    this.initializeFormGroup();
  }

  notificationPrompt(input_database) {
    this._notificationsService
      .success(
      'Consent: ' + input_database.name,
      this.state_view.toUpperCase() + ' SUCCESS ',
      {
        timeOut: 10000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: false
      })
  }

  onAddForm() {
    this.show_selected_forms = false;
    this.is_adding_forms = true;
  }

  onCancelAddForm() {
    this.show_selected_forms = true;
    this.is_adding_forms = false;
  }


}