import { Component, OnInit } from '@angular/core';

import { CaseService } from 'app/core/services';
import { Case } from 'app/core/models';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.css']
})
export class CaseListComponent implements OnInit {
  
  private cases: Case[];

  constructor(private caseService: CaseService) { }

  ngOnInit() {
    this.caseService
        .getAll()
        .subscribe(
          cases => {
            this.cases = cases;
          }
        );

  }

}
