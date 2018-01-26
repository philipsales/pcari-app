import { Component, OnInit } from '@angular/core';

import {
  Case,
  FormAnswer
} from 'app/core/models';

@Component({
  selector: 'app-case-view',
  templateUrl: './case-view.component.html',
  styleUrls: ['./case-view.component.css']
})
export class CaseViewComponent implements OnInit {

  private case: Case;
  private answers: FormAnswer[];

  constructor() {
    this.answers = [];
    this.case = new Case('', '', this.answers);
  }

  ngOnInit() {
  }

}
