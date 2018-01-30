import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras, ActivatedRoute, ParamMap } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

import { ConsentService } from "app/core/services";
import { Consent } from 'app/core/models';
import { ConsentJSON } from 'app/core/interfaces';

import { Observable } from 'rxjs/Observable';

import { GenericErrorStateMatcher } from 'app/shared/_material/material.error';
import { ErrorStateMatcher } from '@angular/material/core';

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-consent-create',
  templateUrl: './consent-create.component.html',
  styleUrls: ['./consent-create.component.css']
})
export class ConsentCreateComponent implements OnInit {


  private consent_id: string;

  private consent: Consent;

  private consentForm: FormGroup;


  private errors: any = {};
  private has_errors = false;
  private is_processing = false;

  private state_view: string;
  private view: string;

  private error_matcher: ErrorStateMatcher;

  constructor(
    private _notificationsService: NotificationsService,
    private consentService: ConsentService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) {
    this.error_matcher = new GenericErrorStateMatcher();
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
      });
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
    this.consentForm = this.toFormGroup(this.consent);
  }


  toFormGroup(data: Consent) {
    return this.fb.group({
      name: [data.name, Validators.required],
      number: data.number,
      description: data.description,
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
