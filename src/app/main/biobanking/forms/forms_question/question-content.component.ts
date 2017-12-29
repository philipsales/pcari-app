import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';

import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Question, Form, Section } from './../forms_detail/form-question.model';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'question-content',
  templateUrl: './question-content.component.html', styleUrls: ['./question-content.component.css']
})
export class QuestionContentComponent implements OnChanges {

  @Input() formArray: FormArray;
  @Input() question: Question;

  @Output() removed = new EventEmitter();
  @Output() clone = new EventEmitter();

  questionGroup: FormGroup;
  index: number;

  questionTypes: any[];

  constructor( 
    private fb: FormBuilder
  ) { 

  }

  ngOnChanges() {

    console.log('--question-content--', this.formArray);
    this.questionGroup = this.toFormGroup(this.question);

    this.index = this.formArray.length;
    this.formArray.push(this.questionGroup);

    //Make into questionTypeService
    this.questionTypes = [ 
      { 
      "value": "textbox",     
      "label": "text",
      "icon" : "fa-square-o"
      },
      { 
      "value": "textarea",    
      "label": "paragraph",
      "icon" : "fa-square-o"
      },
      { 
      "value": "dropdown",    
      "label": "dropdown",
      "icon" : "fa-square-o"
      },
      { 
      "value": "checkbox",
      "label": "checkbox",
      "icon" : "fa-square-o"
      },
      { 
      "value": "radiobutton", 
      "label": "radio",
      "icon" : "fa-square-o"
      },
      { 
      "value": "datepicker",  
      "label": "date",
      "icon" : "fa-square-o"
      }
    ];
  }

  toFormGroup(question: Question){
    return this.fb.group({
        key        : question.key,
        label      : question.label,
        type       : question.type,
        value      : question.value,
        required   : question.required,
        order      : question.order
    });
  }


}
