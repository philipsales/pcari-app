import { Component, OnInit } from '@angular/core';

import { Question, Department, Section } from './form-question.model';
import { departments } from './form-question.model';

@Component({
  selector: 'app-form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.css']
})
export class FormQuestionComponent implements OnInit {

  private departments: Department[] = [];
  private selected_sections: Section[];
  private selected_questions: Question[];
  private questions: Question[]=[];

  private selectedQuestion: Question[]=[];

  private dept_count: number;

  constructor() { }


  ngOnInit() {
    this.departments = departments;
    this.dept_count = this.departments.length;
  }

  selectDepartment(selected_department: number) {
    console.log(this.departments[selected_department].sections);
    this.selected_sections = (this.departments[selected_department].sections);
  }

  selectSection(index: number) {
    console.log('--seletSection');
    console.log(this.selected_sections[index].questions);
    this.questions = this.selected_sections[index].questions;
    this.selectedQuestion = this.questions;
  }



  

}
