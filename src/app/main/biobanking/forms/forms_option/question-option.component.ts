import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';

import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Option } from './../forms_detail/form-question.model';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'question-option',
  templateUrl: './question-option.component.html',
  styleUrls: ['./question-option.component.css']
})
export class QuestionOptionComponent implements OnInit {

  @Input() formArray: FormArray;
  @Input() option: Option;

  @Output() removed = new EventEmitter();

  optionGroup: FormGroup;
  index: number;


  constructor(
   private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.optionGroup = this.toFormGroup(this.option);

    this.index = this.formArray.length;
    this.formArray.push(this.optionGroup);
  }
  
  toFormGroup(option: Option){
    return this.fb.group({
      key  : option.key,
      name : option.name
    });
  }

}
