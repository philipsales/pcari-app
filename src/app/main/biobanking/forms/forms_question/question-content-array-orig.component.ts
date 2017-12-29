import { Component, OnInit, Output, Input  } from '@angular/core';

import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Question, Form, Section } from './../forms_detail/form-question.model';

import { KeyGeneratorService } from 'app/core/services';

@Component({
  selector: 'question-content-array',
  templateUrl: './question-content-array.component.html',
  styleUrls: ['./question-content-array.component.css']
})
export class QuestionContentArrayComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() questions: Question[]; 

  constructor(
    private fb: FormBuilder,
    private keyGenerator: KeyGeneratorService
  ) { }

  ngOnInit() {
    this.initQuestion();
    this.parentForm.addControl('questions', new FormArray([]));
  }

  initQuestion(){
    if(this.questions.length == 0){
      this.questions.push({
        key        : this.keyGenerator.create(),
        label      : '',
        type       : '',
        value      : '',
        required   : false,
        order      : 0,
        options    : []
      });
    }
  }

  addQuestion(){
    this.questions.push({
      key        : this.keyGenerator.create(),
      label      : '',
      type       : '',
      value      : '',
      required   : false,
      order      : 0,
      options    : []
    })
  }

  cloneQuestion(question: FormArray, index: number){
    console.log('--clone---', index);
    console.log('--quesitons.FormArray---', question);
    //console.log('--quesitons.FormGroup---', question.controls[0]);
    //console.log('--quesitons.FormGroup---', question.controls[0].value.key);
    //console.log('--quesitons.FormGroup---', question.controls[0].value.options);

    let questionClone = new Question(
      this.keyGenerator.create(),
      question.controls[index].value.label,
      question.controls[index].value.type,
      question.controls[index].value.value,
      question.controls[index].value.required,
      index+1,
      question.controls[index].value.options
    );

    /*
    this.questions.push({
      this.keyGenerator.create(),
      question.controls[index].value.label,
      question.controls[index].value.type,
      question.controls[index].value.value,
      question.controls[index].value.required,
      question.controls[index].value.order+1,
    });

    question.push(question.controls[0]);
    this.questions.push({
      key        : this.keyGenerator.create(),
      label      : '',
      type       : '',
      value      : '',
      required   : false,
      order      : index+1,
      options    : []
    })

    this.questions.push({
      key        : this.keyGenerator.create(),
      label      : question.controls[index].value.label,
      type       : question.controls[index].value.type,
      value      : question.controls[index].value.value,
      required   : question.controls[index].value.required,
      order      : question.controls[index].value.order+1,
      options    : question.controls[index].value.options
    });
    */

    this.questions.splice(index+1,0,questionClone);

    this.questions.forEach((item,index) => {
       item.order = index;
       console.log('foreach', item.order);
       console.log('foreach label', item.label);
    });


    //(<FormArray>this.parentForm.get('questions')).insert(index+1,question);

    //this.questions.push(question);

    //this.questions.push(questionClone);
    //(<FormArray>this.parentForm.get('questions')).insert(index+1,questionClone);
  }

  removeQuestion(index: number){
    console.log('--content-array-index', index);

    this.questions.splice(index,1);
    (<FormArray>this.parentForm.get('questions')).removeAt(index);
  }

}
