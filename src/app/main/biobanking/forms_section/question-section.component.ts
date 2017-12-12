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
  @Input() number: number;
  @Input() selectedTemplate: Section[];
  @Output() SectionSelected: EventEmitter<any> = new EventEmitter<any>();


  private questions: any;

  private sections: Section[];
  private selectedQuestion: Question;

  constructor() {
  }

  ngOnChanges () {

    console.log('--this.selectedTemplate--');

    this.sections=this.selectedTemplate;
    console.log(this.selectedTemplate);

    console.log('--emit.number--');
    this.SectionSelected.emit(this.questions);
  }

  selectSection(index: number): void {
    console.log('--section.this.number--');
    console.log(index);
    console.log(this.selectedTemplate[index]);
    this.questions = this.selectedTemplate[index];
    console.log(this.questions);

    console.log('--section.number--');
    this.SectionSelected.emit(this.questions);
  }

}
