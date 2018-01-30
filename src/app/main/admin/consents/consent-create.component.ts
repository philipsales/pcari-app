import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras, ActivatedRoute, ParamMap } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

import { ConsentService } from "app/core/services";
import { Consent } from 'app/core/models';
import { ConsentJSON } from 'app/core/interfaces';

@Component({
  selector: 'app-consent-create',
  templateUrl: './consent-create.component.html',
  styleUrls: ['./consent-create.component.css']
})
export class ConsentCreateComponent implements OnInit {

  private consent_id: string;

  private consent: Consent;

  private errors: any = {};
  private has_errors = false;
  private is_processing = false;

  private state_view: string;
  private view: string;

  constructor(
    private _notificationsService: NotificationsService,
    private consentService: ConsentService,
    private route: ActivatedRoute,
    private router: Router) {
    this.consent = new Consent('');
  }

  ngOnInit() {
    this.errors = {};
    this.has_errors = false;
    this.is_processing = false;

    this.consent_id = this.route.snapshot.paramMap.get('id');
    this.state_view = this.route.snapshot.url[0].path;

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

  updateConsent() {
    this.getConsent();
  }

  viewConsent() {
    this.getConsent();
  }

  saveConsent() {
  }

  getConsent() {
    this.consentService
      .getConsent(this.consent_id)
      .subscribe(
      consent => {
        this.consent = consent;
      });
  }

  onSaveClick(input_consent: Consent) {
    console.log()
    this.is_processing = true;

    this.consentService
      .create(input_consent)
      .subscribe(
      saved_consent => {
        this.notificationPrompt(saved_consent);
      });
  }

  onUpdateClick(input_consent: Consent) {
    this.consentService
      .update(this.consent_id, input_consent)
      .subscribe(
      updated_consent => {
        this.notificationPrompt(updated_consent);
      });
  }

  onResetClick() {
    this.is_processing = false;
    this.consent = new Consent('');
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
