import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';

import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Question, Form, Section } from 'app/core/models';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'question-content',
  templateUrl: './question-content.component.html', styleUrls: ['./question-content.component.css']
})
export class QuestionContentComponent implements OnChanges {

  @Input() formArray: FormArray;
  @Input() question: Question;
  @Input() viewState: string;
  @Input() sectionIndex: number;
  @Input() questionIndex: number;

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
    this.questionGroup = this.toFormGroup(this.question);

    this.index = this.formArray.length;
    this.formArray.push(this.questionGroup);

    //Make into questionTypeService
    this.questionTypes = [
      {
        "value": "textbox",
        "label": "text"
      },
      {
        "value": "textarea",
        "label": "paragraph"
      },
      {
        "value": "dropdown",
        "label": "dropdown"
      },
      {
        "value": "checkbox",
        "label": "multiple selection"
      },
      {
        "value": "radiobutton",
        "label": "radio"
      },
      {
        "value": "datepicker",
        "label": "date"
      }
    ];
  }

  toFormGroup(question: Question) {
    return this.fb.group({
      key: question.key,
      label: question.label,
      type: question.type,
      value: question.value,
      required: question.required,
      order: question.order
    });
  }


}
