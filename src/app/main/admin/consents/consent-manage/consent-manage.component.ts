import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras, ActivatedRoute, ParamMap } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

import { ConsentService } from "app/core/services";
import { Consent, Form, FormAnswer } from 'app/core/models';
import { ConsentJSON } from 'app/core/interfaces';

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
  private displayedColumns: string[] = [];
  private datasource: any;

  private data: Form;

  constructor(
    private _notificationsService: NotificationsService,
    private consentService: ConsentService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) {
    this.error_matcher = new GenericErrorStateMatcher();

    this.formArray = new FormArray([]);


  }

  ngOnInit() {
    this.errors = {};
    this.has_errors = false;
    this.is_processing = false;


    this.consent_id = this.route.snapshot.paramMap.get('id');
    this.state_view = this.route.snapshot.url[0].path;

    this.initConsentFormGroup();

    if (this.state_view === 'update') {
      this.updateConsent();
    }
    else if (this.state_view == 'create') {
      this.saveConsent();
    }
    else if (this.state_view == 'view') {
      this.viewConsent();
    }



  }

  getConsentAsync() {
    var promise = new Promise((resolve, reject) => {
      this.consentService
        .getConsent(this.consent_id)
        .subscribe(consent => {
          this.consent = consent;
          resolve();
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

  updateConsent() {
    this.getConsentAsync().then(
      (result) => {
        this.initConsentFormGroup();
      }
    );

  }

  saveConsent() {
    this.initConsentFormGroup();
  }

  initConsentFormGroup() {
    if (!this.consent) {
      this.consent = new Consent('', '', '', '', '', '', '');
    }

    this.consentFormGroup = this.toFormGroup(this.consent);
    console.log('consentForm', this.consentFormGroup);

    this.consentFormGroup.addControl('forms', new FormArray([]));
    console.log('consentForm + addControls', this.consentFormGroup);


    this.displayedColumns = ['Name', 'Department'];
    this.datasource = new MatTableDataSource(this.forms);


    this.data = new Form(
      'Untitled form',
      'University of the Philippines - Philippine General Hospital',
      'General Surgery Department',
      'Patient Repository'
    );

    this.forms.push(this.data);

    this.data = new Form(
      'General Consent',
      'University of the Philippines - Philippine General Hospital',
      'Institute of Biology',
      'Biobanking Repository'
    );

    this.forms.push(this.data);

    this.consentFormMappingGroup = this.toConsentFormMappingFormGroup(this.forms[0]);
    (<FormArray>this.consentFormGroup.get('forms')).push(this.toConsentFormMappingFormGroup(this.forms[0]));
    /*
    this.consentForm.get('forms').setValue(this.consentFormMappingGroup);
    */
  }

  toFormGroup(data: Consent) {
    return this.fb.group({
      name: [data.name, Validators.required],
      number: [data.number],
      description: [data.description]
    });
  }

  toConsentFormMappingFormGroup(data: Form) {
    console.log('FASKE', data);
    return this.fb.group({
      name: [data.name],
      department: [data.department],
      organization: [data.organization],
      type: [data.type]
    });
  }

  viewConsent() {
    this.getConsentAsync().then(
      (result) => this.initConsentFormGroup(),
    );
  }

  onSaveClick(input_consent: Consent) {
    console.log('SAVE:', input_consent);
    console.log('SAVE JSON:', JSON.stringify(input_consent));
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
    this.consent = new Consent('', '', '', '', '', '', '');
    this.initConsentFormGroup();
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
}