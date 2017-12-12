import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { Question, Template, Section } from './form-question.model';
import { templates } from './form-question.model';

@Component({
  selector: 'app-form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.css']
})
export class FormQuestionComponent implements OnInit {

  private templates: Template[] = [];
  private selected_sections: Section[];
  private selected_questions: Question[];
  private questions: Question[]=[];

  private selectedQuestion: Question[]=[];

  private dept_count: number;

  constructor() { 
    console.log('--form-question.constructor--');
  }


  ngOnInit() {
    console.log('--OnInit--');

    this.templates = templates;
    this.dept_count = this.templates.length;
  }

  selectTemplate(selected_template: number) {
    console.log(this.templates[selected_template].sections);
    this.selected_sections = (this.templates[selected_template].sections);
  }

  selectSection(index: number) {
    console.log('--seletSection');
    console.log(this.selected_sections[index].questions);
    this.questions = this.selected_sections[index].questions;
    this.selectedQuestion = this.questions;
  }



  

}
