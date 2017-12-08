//import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Component, Input, OnChanges } from '@angular/core';

import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { Question, Department, Section } from './form-question.model';
import { departments } from './form-question.model';


@Component({
  selector: 'app-question-detail',
  templateUrl: './form-question-detail.component.html',
  styleUrls: ['./form-question-detail.component.css']
})
export class FormQuestionDetailComponent implements OnChanges {
  @Input() question: Question;

  private questions: Question;

  constructor() {
  }

  ngOnChanges() {
    console.log('--changes--');
    console.log(this.question);
    this.questions = this.question;
  }

}
