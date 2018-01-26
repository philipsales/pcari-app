import { Component, OnInit } from '@angular/core';

import {
  Case,
  FormAnswer
} from 'app/core/models';

@Component({
  selector: 'app-case-create',
  templateUrl: './case-create.component.html',
  styleUrls: ['./case-create.component.css']
})
export class CaseCreateComponent implements OnInit {

  private case: Case;
  private answers: FormAnswer[];

  private errors: any = {};
  private has_errors = false;
  private is_processing = false;
  private is_organization_ok = false;

  constructor() {
    this.answers = [];
    this.case = new Case('', '', this.answers);
  }

  ngOnInit() {
    console.warn(this.has_errors);
  }

}
