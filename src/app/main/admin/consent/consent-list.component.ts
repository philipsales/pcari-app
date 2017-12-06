import { Component, OnInit } from '@angular/core';

import { ConsentService } from 'app/core/services';
import { Consent } from 'app/core/models'; 

@Component({
  selector: 'app-consent-list',
  templateUrl: './consent-list.component.html',
  styleUrls: ['./consent-list.component.css']
})
export class ConsentListComponent implements OnInit {

  private consents: Consent[];

  constructor(private consentService: ConsentService) { }

  ngOnInit() {
    console.log("--OnInit--ConsentList.component--");
    this.consentService
        .getAll()
        .then(consents=> {
          console.log("--consents--");
          console.log(consents);
          this.consents = consents;
        });
  }

}
