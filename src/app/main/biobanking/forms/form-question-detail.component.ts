//import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Component, Input, OnChanges } from '@angular/core';

import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { Question, Department, Section } from './form-question.model';
import { departments } from './form-question.model';

import { QuestionService } from './question.service';
import { NotificationsService } from 'angular2-notifications';


@Component({
  selector: 'app-question-detail',
  templateUrl: './form-question-detail.component.html',
  styleUrls: ['./form-question-detail.component.css']
})
export class FormQuestionDetailComponent implements OnChanges {
  @Input() question: Question;

  private questions: Question;

  private errors: any = {};
  private has_errors = false;
  private is_processing = false;

  private count: number;

  constructor(
  private service: QuestionService,
  private _notificationsService: NotificationsService) {		
      this.count = 1;
  }

  ngOnChanges() {
    console.log('--changes--');
    console.log(this.question);
    this.questions = this.question;
  }

}
