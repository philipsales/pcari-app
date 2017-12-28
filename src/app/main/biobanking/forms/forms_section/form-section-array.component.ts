import { Component, OnInit, Input } from '@angular/core';

import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { Question, Form, Section } from './../forms_detail/form-question.model';

@Component({
  selector: 'form-section-array',
  templateUrl: './form-section-array.component.html',
  styleUrls: ['./form-section-array.component.css'] })
export class FormSectionArrayComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() sections: Section[];

  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.initSection();
    console.log('--sections--', this.sections);
    this.parentForm.addControl('sections', new FormArray([]));
  }

  initSection(){
    if(this.sections.length == 0){
      this.sections.push({
        key: '',
        name: ''
      });
    }
  }

  addSection(index: number){
    this.sections.push({
      key: '',
      name: '',
      questions: []
    });
  }

  removeSection(index: number){
    console.log('--section-array-index', index);
    console.log('---parentForm.section', this.parentForm.get('sections'));

      this.sections.splice(index,1);
      (<FormArray>this.parentForm.get('sections')).removeAt(index);
  }



}
