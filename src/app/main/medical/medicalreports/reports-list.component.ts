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

  reports: Report[];
  testHeader: string[]=[];
  private selectedReport: Report;

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
        FileSaver.saveAs(response, "testHeader.json");
      });
  }

  downloadPDF(): any {
    this.reportService
      .downloadFilePDF()
      .subscribe((response) => {
        FileSaver.saveAs(response, "testHeader.pdf");
      });
  }

  downloadJSPDF(): any {
    var columns = [
      { title: "Demographics", datakey: "id" },
      { title: "Total", datakey: "name" }
    ];
    var rows = [
      { "id": 1, "name": "Male" },
      { "id": 2, "name": "Female" }
    ];

    var doc = new jsPDF('p', 'pt');
    doc.text("Breast Cancer Stats");
    doc.autoTable(columns, rows);
    doc.save("table.pdf");
  }

  onDownloadReport(): any {
    console.log('hell0 ');
    this.reportService
      .getMedicalReports()
      .subscribe(
        reports => {
          this.pivotTable(reports);
          //this.reports = reports;
        }
      );
  }

  reportsTable: any[];
  tableHeaders: string[]=[]; 
  unique: string[]=[];
  testData: any[]=[];
  tempHeader: string[]=[];
  
  pivotTable(reports): any {

    console.log('pivot', reports);
    this.testData = reports.payload;

    this.testData.map((headers) => {
      for (let key of Object.keys(headers)){
        this.tempHeader.push(key);
      }
    });
    
    this.tableHeaders = this.tempHeader.sort().filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    })

    //this.setPivotTableTest();
    this.setPivotTable();
  }

  generateTestHeader(): any {
    this.testHeader.push("_case_number");
    this.testHeader.push("_form_name");
    this.testHeader.push("Diagnosis - Primary Organ Site - Uterus");
    this.testHeader.push("Diagnosis - Primary Organ Site - Ovary");
    this.testHeader.push("Diagnosis - Primary Organ Site");
    this.testHeader.push("Risk Factors - Age of menopause");
  }

  generateTestData(): any {

    var breastData1 = {
      "_form_name": "Breast Cancer Form",
      "_case_number": "04",
      "Diagnosis - Primary Organ Site - Uterus": "1",
      "Diagnosis - Primary Organ Site - Ovary": "1"
    };
    var breastData2 = {
      "_form_name": "Breast Cancer Form",
      "_case_number": "099",
      "Diagnosis - Primary Organ Site": "Uterus"
    };
    var gyneData = {
      "_form_name": "Gynecology Cancer Form",
      "_case_number": "04",
      "Risk Factors - Age of menopause": "46",
    }

    this.testData.push(breastData1);
    this.testData.push(breastData2);
    this.testData.push(gyneData);
    console.log(this.testData);
  }

  newData: any[]=[];
  objectKeys = Object.keys;

  setPivotTable(): any{

    for (let header of this.tableHeaders) {
      for (let keys of Object.values(this.testData)) {
          if(!(header in keys)){ 
            keys[header] = "";
          }
      }
    } 
        console.log('FINAL--',this.testData);
        this.testData = Object.values(this.testData);
        console.log('Valeus onlly--',this.testData);

  }

  setPivotTableTest(): any{

    this.generateTestData();
    this.generateTestHeader();

    for (let header of this.testHeader) {
      for (let keys of Object.values(this.testData)) {
          if(!(header in keys)){ 
            keys[header] = "";
          }
      }
    } 
        console.log('FINAL--',this.testData);
        this.testData = Object.values(this.testData);
        console.log('Valeus onlly--',this.testData);

  }


}
