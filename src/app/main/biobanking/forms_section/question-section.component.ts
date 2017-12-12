import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { NotificationsService } from 'angular2-notifications';
import { FormQuestionService } from './../forms/form-question.service';

import { Question, Template, Section } from './../forms/form-question.model';


@Component({
  selector: 'question-section',
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.css']
})
export class QuestionSectionComponent implements OnChanges {
  @Input() inputSelectedSection: Section[];
  @Output() outputSelectedQuestions: EventEmitter<any> = new EventEmitter<any>();


  private questions: Question[]=[];
  private selectedQuestion: Question[]=[];
  private sections: Section[]=[];

  constructor() {
  }

  ngOnChanges () {
    this.sections=this.inputSelectedSection;
  }

  onSelectSection(index: number): void {
    this.questions = this.inputSelectedSection[index].questions;
    this.selectedQuestion = this.questions;

    console.log('--emit.number--', this.selectedQuestion);
    this.outputSelectedQuestions.emit(this.selectedQuestion);
  }

}
