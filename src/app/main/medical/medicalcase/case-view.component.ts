import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

import { CaseService } from 'app/core/services';

import {
  Case,
  FormAnswer
} from 'app/core/models';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NoJWTError } from 'app/core/errors';
import { CaseJSON } from 'app/core/interfaces';

@Component({
  selector: 'app-case-view',
  templateUrl: './case-view.component.html',
  styleUrls: ['./case-view.component.css']
})
export class CaseViewComponent implements OnInit {

  private case: Case;
  private answers: FormAnswer[];

  constructor(
    private route: ActivatedRoute,
    private caseService: CaseService
  ) {
    this.answers = [];
    this.case = new Case('', '', this.answers);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.caseService.get(id).subscribe((response: Case) => {
      delete this.case;
      this.case = response;
      console.log(response);
    }, error => {
      console.log(error); // get the error in error handler
      if (error instanceof NoJWTError) {
        console.warn('TO DO : handle JWT Expired');
      }
    });
  }// --OnInit
}