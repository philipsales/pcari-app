import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { Question, Form, Section } from './form-question.model';

import { forms } from './form-question.model';

@Component({
  selector: 'app-form-question',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css']
}) 

export class QuestionViewComponent implements OnInit {

  private forms: Form[] = [];

  private selectedDepartment: number;
  private departmentCount: number;

  private sections: Section[];

  private selectedQuestion: Question[]=[];
  private questions: Question[]=[];


  constructor(
  private route: ActivatedRoute
  ) { 
  }

  ngOnInit() {
    this.initForms();
    this.departmentCount = this.forms.length;
  }

  initForms(): Section[] {
    let index = this.route.snapshot.paramMap.get('id');
    return this.sections = forms[index].sections;
  }

  onSelectForm(index: number) {
    this.sections = this.forms[index].sections;
  }


  onSelectSection(index: number) {
    console.log('--onSelectionSection--', this.sections);

    this.questions = this.sections[index].questions;
    this.selectedQuestion = this.questions;
    this.selectedDepartment=index;

  }

  public onSelectQuestion(question: any): void {
    console.log('--onselectQuestion--', question);


    if(question){
      console.log('--sectionHander',question);
      console.log(typeof question);

      this.questions = question;
    }
  }



  

}
