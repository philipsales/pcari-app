import { Component, OnInit } from '@angular/core';

import {
  Case,
  FormAnswer
} from 'app/core/models';

@Component({
  selector: 'app-case-update',
  templateUrl: './case-update.component.html',
  styleUrls: ['./case-update.component.css']
})
export class CaseUpdateComponent implements OnInit {

  private case: Case;
  private answers: FormAnswer[];

  constructor() {
    this.answers = [];
    this.case = new Case('', '', this.answers);
  }

  ngOnInit() {
  }

}
