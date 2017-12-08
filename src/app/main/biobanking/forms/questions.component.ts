import { Component, OnInit } from '@angular/core';

import { Question } from './question';

import { QuestionService } from './question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

    private questions : Question[];

    constructor(
	private service: QuestionService,
    ) {
    }//--constructor

    ngOnInit() {
	this.service.getQuestions().subscribe(
	  questions => {
	      this.questions = questions;
	      console.warn(questions, 'THE QUESTIONS');
	  },error => {
	      console.log(error);//get the error in error handler
	  });
    }//--OnInit
}
