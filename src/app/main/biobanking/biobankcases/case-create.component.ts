import { Component, OnInit } from '@angular/core';

import {
  Case,
  FormAnswer,
  Form
} from 'app/core/models';

import { environment } from 'environments/environment';
import { FormService, CaseService } from 'app/core/services';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-case-create',
  templateUrl: './case-create.component.html',
  styleUrls: ['./case-create.component.css']
})
export class CaseCreateComponent implements OnInit {

  case: Case;
  forms: Form[];
  answers: FormAnswer[];
  is_processing = false;
  medcases: string[];
  show_icd: boolean;

  constructor(
    private formService: FormService,
    private caseService: CaseService,
    private _notificationsService: NotificationsService,
    private router: Router
  ) {
    this.answers = [];
    this.case = new Case('', environment.ORG_BIOBANK, '', this.answers);
  }

  ngOnInit() {
    this.formService.getValidBiobankForms().subscribe(
      forms => {
        this.forms = forms;
        console.log(this.forms, 'filtered forms');
      }
    );

    this.caseService.getMedicalCaseNumbers().subscribe(
      casenbrs => {
        this.medcases = casenbrs;
      }
    );
  }

  onSubmitCase(case_for_create: Case) {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    case_for_create.created_by = currentUser.username;

    for (var i = 0; i < case_for_create.forms.length; ++i) {
      if (case_for_create.forms[i]) {
        case_for_create.forms[i].created_by = currentUser.username;
      }
    }


    this.caseService.create(case_for_create).subscribe((created_case: Case) => {
      this.is_processing = false;
      console.log(created_case, 'CASE CREATED : case-manage.component');
      this._notificationsService.success(
        'New Case : ' + created_case.case_nbr,
        'Successfully Created',
        {
          timeOut: 10000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false,
        }
      );
      this.router.navigate(['/biobanking/cases']);
    }, errors => {
      console.log(errors, 'ERROR : case-manage.component');
      this.is_processing = false;
    });
  }
}
