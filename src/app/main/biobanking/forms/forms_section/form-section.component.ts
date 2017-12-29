import { Component, OnInit, Output, Input, EventEmitter, OnChanges, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { Question, Form, Section } from './../forms_detail/form-question.model';

import 'rxjs/add/operator/map';


@Component({
  selector: 'form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css']
})
export class FormSectionComponent implements OnInit {

  @Input() formArray: FormArray;
  @Input() section: Section; 
  @Input() sectionLength: number; 

  @Output() removed = new EventEmitter();

  sectionGroup: FormGroup;
  index: number;

  constructor( 
    private fb: FormBuilder,
  ) { 
    this.formArray = new FormArray([]); 
  }

  ngOnInit() {
    console.log('--form-section.this.section--', this.section);
    console.log('--form-section.this.length--', this.sectionLength);
    this.sectionGroup = this.toFormGroup(this.section); 

    this.index = this.formArray.length;
    this.formArray.push(this.sectionGroup);
    console.log('-SHIT--formARray-SECTION', this.formArray);
  }

  toFormGroup(section: Section) {
    console.log('question--', section.questions);
    return this.fb.group( {
        key  : section.key,
        name : section.name
    });

  }

}
