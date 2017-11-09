import { Component, OnInit } from '@angular/core';

import { ReportService } from 'app/core/services';
import { Report } from 'app/core/models';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportListComponent implements OnInit {

  private reports : Report[];
  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.reportService
        .getAll()
        .then(reports => {
          console.log(reports);
          this.reports = reports;
        });
  }

}
