import { Component, OnInit, Input } from '@angular/core';

import {
  Case,
  FormAnswer
} from 'app/core/models';
import { CaseService } from 'app/core/services';
import { NoJWTError } from 'app/core/errors';
import { NotificationsService } from 'angular2-notifications';
import { create } from 'domain';

@Component({
  selector: 'app-case-manage',
  templateUrl: './case-manage.component.html',
  styleUrls: ['./case-manage.component.css']
})

export class CaseManageComponent implements OnInit {

  @Input() case: Case;
  @Input() method: string;

  private errors: any = {};
  private has_errors = false;
  private is_processing = false;

  constructor(
    private caseService: CaseService,
    private _notificationsService: NotificationsService
  ) { }

  ngOnInit() {
    console.warn(this.has_errors);
  }

  updateCase() {
    console.log(this.case);
    this.errors = {};
    this.has_errors = false;
    this.is_processing = true;
    this.caseService.create(this.case).subscribe((created_case: Case) => {
      this.is_processing = false;
      console.log(created_case, 'CASE CREATED : case-manage.component');
      this._notificationsService.success(
          'New Case : ' + created_case.case_nbr,
          'Successfully Created.',
          {
              timeOut: 10000,
              showProgressBar: true,
              pauseOnHover: false,
              clickToClose: false,
          }
      );
    }, errors => {
      console.log(errors, 'ERROR : case-manage.component');
      this.errors = errors;
      this.has_errors = true;
      this.is_processing = false;
    });
  }
}
