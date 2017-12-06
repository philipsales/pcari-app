import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

import { Consent } from 'app/core/models'; 

@Component({
  selector: 'app-consent-create',
  templateUrl: './consent-create.component.html',
  styleUrls: ['./consent-create.component.css']
})
export class ConsentCreateComponent implements OnInit {

  private new_consent: Consent;
  private errors: any = {};
  private has_errors = false;
  private is_processing = false;

  constructor() { 
     this.new_consent = new Consent('');
  }

  ngOnInit() {
    this.errors = {};
    this.has_errors = false;
    this.is_processing = true;
  }

}
