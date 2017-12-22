import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { NotificationsService } from 'angular2-notifications';

import { Question, Section }        from 'app/core/models';

@Component({
  selector: 'question-section',
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.css']
})
export class QuestionSectionComponent implements OnChanges {

  @Input()  selectedSection: Section[];
  @Output() selectedQuestions: EventEmitter<any> = new EventEmitter<any>();


  private questions: Question[]=[];
  private selectedQuestion: Question[]=[];

  private sections: Section[]=[];
  private new_sections: Section[]=[];

  private empty_question: Question[]=[];

  constructor() {
  }

  ngOnChanges () {
    console.log('--inpt--', this.selectedSection);

    if(this.selectedSection) {
    //initialize section for preivew
      this.sections = this.selectedSection;
    } 
    else {
    //instantiate Untitled Section 
      this.sections.push(new Section(this.setHashKey(),"Untitled Section",0)); 
    }

  }

  onSelectSection(index: number): void {
    console.log('--emit.number--', this.selectedSection);

    //initialize section for preivew

    if(this.selectedSection){
      this.questions = this.selectedSection[index].questions;
      this.selectedQuestion = this.questions;
      this.selectedQuestions.emit(this.selectedQuestion);
    }
    else {
      this.selectedQuestions.emit(this.empty_question);
    }

  }

  //REFRACTOR MAKE into service
  setHashKey(): string {
    let max = 111111;
    let min = 1111;
    return ''+ Math.floor(Math.random() * (max - min  + 1)) + min;
  }

  onAddSection(name: string){

    console.log('-delete--jl',name);

    let order = this.sections.length+1;

    let sec = new Section(this.setHashKey(),name,order); 

    this.new_sections.push(sec);

    this.sections.push(sec);
  }

  onDeleteSection(key){
    this.sections = this.sections.filter(section => section.key !== key);
  }

  onEditSection(key){
  }

}
