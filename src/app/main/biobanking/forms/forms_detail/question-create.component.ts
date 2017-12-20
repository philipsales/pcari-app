import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { Question, Form, Section } from './form-question.model';

import { forms } from './form-question.model';

@Component({
  selector: 'app-form-question',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css']
}) 

export class QuestionCreateComponent implements OnInit {

  private forms: Form[] = [];

  private selectedDepartment: number;
  private departmentCount: number;

  private sections: Section[];

  private selectedQuestion: Question[]=[];
  private questions: Question[]=[];


  constructor() { 
  }

  ngOnInit() {
    this.forms = this.initForms();
    this.departmentCount = this.forms.length;
  }

  initForms(): Form[] {
    return forms 
  }

  onSelectForm(index: number) {
    this.sections = this.forms[index].sections;
  }

  onSelectSection(index: number) {
    this.questions = this.sections[index].questions;
    this.selectedQuestion = this.questions;
    this.selectedDepartment=index;
  }

  public onSelectQuestion(question: any): void {
    console.log('--sectionHander',question);
    console.log(typeof question);
    this.questions = question;
  }




  

}
