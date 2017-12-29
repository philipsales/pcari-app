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

  //cloneQuestion(question: FormArray, index: number){
  cloneQuestion(question: FormGroup, index: number){
    console.log('--clone---', index);
    console.log('--quesitons.FormArray---', question);
    //console.log('--quesitons.FormGroup---', question.controls[0]);
    //console.log('--quesitons.FormGroup---', question.controls[0].value.key);
    //console.log('--quesitons.FormGroup---', question.controls[0].value.options);

    /*
    let questionClone = new Question(
      this.keyGenerator.create(),
      question.label.value,
      question.type.value,
      question.value.value,
      question.required.value,
      question.order.value+1,
      question.options.value
    );
    */

    let questionClone = new Question(
      this.keyGenerator.create(),
      question.controls[index].value.label,
      question.controls[index].value.type,
      question.controls[index].value.value,
      question.controls[index].value.required,
      question.controls[index].value.order+1,
      question.controls[index].value.options
    );

    /*
    this.questions.push({
      key        : this.keyGenerator.create(),
      label      : '',
      type       : '',
      value      : '',
      required   : false,
      order      : index+1,
      options    : []
    })

    */

    this.questions.splice(index+1,0,questionClone);

    this.questions.forEach((item,index) => {
       console.log('item.length', this.questions.length);
       console.log('item.order', item.order);
       console.log('item.label', item.label);
       console.log('item.type', item.type);
       console.log('item["order"]', item['order']);
       console.log('index', index);
       console.log('=========' );
       item['order']=index+1;
       item.order=index+1;
    });

    console.log('parentForm.controls.----', this.parentForm.controls);
    console.log('parentForm.controls.questions----', this.parentForm.controls.questions);
    console.log('parentForm.get(questions)----', this.parentForm.get('questions'));
    console.log('parentForm.controls[0]-----', this.parentForm.controls.questions);

    /*
    let foo: FormGroup;
    foo = this.parentForm;
    foo.patchValue({order: 1331});
    */
    //this.parentForm.get('questions').patchValue({order: 1331});

    //this.parentForm.get('questions').patchValue({order: 123});
    //this.parentForm.controls.questions.patchValue({order: 123});
    //this.parentForm.controls.questions.patchValue({order: 123});
    //this.parentForm.patchValue({order: 123});

    console.log('---PATCHVALUE----', this.parentForm);
    console.log('---PATCHVALUE.getQuestion----', this.parentForm.get('questions').value);


    //(<FormArray>this.parentForm.get('questions')).insert(index+1,question);
    //(<FormArray>this.parentForm.get('questions')).insert(index+1,questionClone);
  }

  patchValues(){
    return this.fb.group({
      order: 10
    });
  }

  removeQuestion(index: number){
    console.log('--content-array-index', index);

    this.questions.splice(index,1);
    (<FormArray>this.parentForm.get('questions')).removeAt(index);
  }

}
