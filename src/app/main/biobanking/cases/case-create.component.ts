import { Component, OnInit } from '@angular/core';

import {
  Case,
  FormAnswer
} from 'app/core/models';

import { environment } from 'environments/environment';

@Component({
  selector: 'app-case-create',
  templateUrl: './case-create.component.html',
  styleUrls: ['./case-create.component.css']
})
export class CaseCreateComponent implements OnInit {

  private case: Case;
  private answers: FormAnswer[];

  constructor() {
    this.answers = [];
    this.case = new Case('', environment.ORG_BIOBANK, '', this.answers);
  }

  ngOnInit() {
  }

}
