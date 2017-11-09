import { Component, OnInit } from '@angular/core';

import { ReportService } from 'app/core/services';
import { Report } from 'app/core/models';

import * as FileSaver from 'file-saver';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

//import * as jsPDF from 'jspdf';
declare var jsPDF: any;

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportListComponent implements OnInit {

  private reports : Report[];
  private selectedReport : Report;

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.reportService
        .getReports()
        .then(reports => {
          console.log(reports);
          return this.reports = reports;
        });
  }

  view(id: number): void {
    console.info("---id--", id);

    this.reportService
        .getReport(id)
        .then(selectedReport => {
          console.info("selectedReport: ", selectedReport);
          this.selectedReport = selectedReport;
        });
  }


  downloadJSON(): any {
    this.reportService
      .downloadFileJSON()
      .subscribe((response) => {
        FileSaver.saveAs(response, "test.json");
      });
  }

  downloadPDF(): any {
    this.reportService
      .downloadFilePDF()
      .subscribe((response) => {
        FileSaver.saveAs(response, "test.pdf");
      });
  }

  downloadJSPDF(): any {
    const columns = [
      { title: "ID", datakey: "id" },
      { title: "Name", datakey: "name" }
    ];
    const data = [
      { "id": 1, "name": "Shaw"},
      { "id": 2, "name": "Shaws"}
    ]

    var doc = new jsPDF('p', 'pt');
    doc.autoTable(columns,data);
    doc.save("table.pdf");
  }





}
