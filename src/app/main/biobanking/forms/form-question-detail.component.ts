import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { Question, Department, Section } from './form-question.model';
import { departments } from './form-question.model';

import { NotificationsService } from 'angular2-notifications';
import { FormQuestionService } from './form-question.service';


@Component({
  selector: 'app-question-detail',
  templateUrl: './form-question-detail.component.html',
  styleUrls: ['./form-question-detail.component.css']
})
export class FormQuestionDetailComponent implements OnChanges {
  @Input() question: Question[];

  private questionForm: FormGroup;

  private questions: Question[];

  private errors: any = {};
  private has_errors = false;
  private is_processing = false;


  constructor(
    private _notificationsService: NotificationsService,
    private fb: FormBuilder,
    private questionService: FormQuestionService
  ) {		
      console.log('--form-question-detial.constructor--');
      this.createForm();
      console.log('--questionForm--');
      console.log(this.questionForm);
  }

  ngOnChanges() {
    console.log('--Onchanges--');
    console.log(this.question);

    this.questions = this.question;

    this.setQuestions(this.questions);

  }

  createForm() {
    this.questionForm = this.fb.group({
      name: '',
      secretLairs: this.fb.array([])
    });

    console.log(this.questionForm);
  }

  setQuestions(questions: Question[]){
    console.log('--setQuestions--');
    console.log(questions);
    const questionFGs = questions.map(question => this.fb.group(question));
    
    console.log('--FormGroups--');
    console.log(questionFGs);

    const questionFormArray = this.fb.array(questionFGs);
    console.log('--setQuestions.FormArray--');
    this.questionForm.setControl('secretLairs', questionFormArray);
    console.log(this.questionForm);
  }

  get secretLairs(): FormArray {
      return this.questionForm.get('secretLairs') as FormArray;
  };

  createQuestion(): FormGroup {
    return this.fb.group({
      key         : '',
      label       : '',
      type        : '',
      value       : '',
      required    : false, 
      order       : this.secretLairs.controls.length + 1 
    });
  }

  onAddLair() {
    console.log('---onAddLair---');
    console.log('---before--');
    console.log(this.secretLairs);
    console.log(this.secretLairs.length);

    //this.secretLairs.push(this.fb.group(new Question()));

    this.secretLairs.push(this.createQuestion());

    console.log('----after--');
    console.log(this.secretLairs);
  }

  onAddSection() {
      console.log('---onAddSection---');
  }

  onSaveClick(input_question: Question[]){
      console.log('---onSaveClick---');

  }


}
