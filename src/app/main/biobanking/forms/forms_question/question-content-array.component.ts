import { Component, OnInit, Output, Input, OnChanges  } from '@angular/core';

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
  @Input() viewState: string; 

  questionGroup: FormGroup;

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
        label      : 'Untitled question',
        type       : 'textbox',
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
      label      : 'Untitled question',
      type       : 'textbox',
      value      : '',
      required   : false,
      order      : (<FormArray>this.parentForm.controls.questions).length,
      options    : []
    })
  }

  toFormGroup(question: Question){
    return this.fb.group({
        key        : [question.key],
        label      : [question.label],
        type       : [question.type],
        value      : [question.value],
        required   : [question.required],
        order      : [question.order],
        options    : [question.options]
    });
  }

  cloneQuestion(question: Question, index: number){

    let questionClone = new Question(
      this.keyGenerator.create(),
      this.parentForm.controls['questions'].value[index].label,
      this.parentForm.controls['questions'].value[index].type,
      this.parentForm.controls['questions'].value[index].value,
      this.parentForm.controls['questions'].value[index].required,
      index+1,
      this.parentForm.controls['questions'].value[index].options
    )

    //this.questions.splice(question.order+1,0,questionClone);
    //this.questions.push(question);
    this.questions.splice(index+1,0,questionClone);
    //(<FormArray>this.parentForm.get('questions')).push(this.toFormGroup(question));
    this.refreshOrder();

    console.log('==LAST-parentFormARray-',(<FormArray>this.parentForm.controls.questions));
    console.log('--LAST-parentFOrm.controls.questions-',(this.parentForm.controls.questions));

    //(<FormArray>this.parentForm.get('questions')).insert(index+1,question);
    //(<FormArray>this.parentForm.get('questions')).insert(index+1,questionClone);
  }

  refreshOrder(){
    const ctrl = <FormArray>this.parentForm.controls['questions'];
    console.log('-CTRL--',ctrl);
    ctrl.controls.forEach( (x,indexes) => {
      console.log('x.get--INDEX--', indexes);
      console.log('x.get--OLD----', x.get('order').value);
      x.patchValue({order: indexes});
      console.log('x.get--PATCH--', x.get('order').value);
    });
   //(<FormArray>this.parentForm.controls.questions).at(foo+1).patchValue({order: order});
   //(<FormArray>this.parentForm.controls.questions).at(foo).reset({order: order});

  }

  patchValues(){
    return this.fb.group({
      order: [10]
    });
  }

  removeQuestion(index: number){
    console.log('--content-array-index', index);

    this.questions.splice(index,1);
    (<FormArray>this.parentForm.get('questions')).removeAt(index);

    const ctrl = <FormArray>this.parentForm.controls['questions'];
    ctrl.controls.forEach( (x,indexes) => {
      console.log('x.get--INDEX--', indexes);
      console.log('x.get--OLD----', x.get('order').value);
      x.patchValue({order: indexes});
      console.log('x.get--PATCH--', x.get('order').value);
    });
  }

}
