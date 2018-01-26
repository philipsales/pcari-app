import { Component, OnInit, Input } from '@angular/core';

import {
  Case,
  FormAnswer
} from 'app/core/models';

@Component({
  selector: 'app-case-manage',
  templateUrl: './case-manage.component.html',
  styleUrls: ['./case-manage.component.css']
})
export class CaseManageComponent implements OnInit {

  @Input() case: Case;

  private errors: any = {};
  private has_errors = false;
  private is_processing = false;

  constructor() { }

  ngOnInit() {
    console.warn(this.has_errors);
  }

}
