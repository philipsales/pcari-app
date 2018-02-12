import { Component, OnInit } from '@angular/core';

import {
  Case,
  FormAnswer
} from 'app/core/models';
import { NoJWTError } from 'app/core/errors';
import { ActivatedRoute } from '@angular/router';
import { CaseService } from 'app/core/services';

import { environment } from 'environments/environment';

@Component({
  selector: 'app-case-update',
  templateUrl: './case-update.component.html',
  styleUrls: ['./case-update.component.css']
})
export class CaseUpdateComponent implements OnInit {
  private case: Case;
  private answers: FormAnswer[];

  constructor(
    private route: ActivatedRoute,
    private caseService: CaseService
  ) {
    this.answers = [];
    this.case = new Case('', environment.ORG_BIOBANK, '', this.answers);
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
