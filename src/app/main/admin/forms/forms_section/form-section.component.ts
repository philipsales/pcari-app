import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { Question, Form, Section } from 'app/core/models';

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
  @Input() viewState: string;

  @Output() removed = new EventEmitter();

  sectionGroup: FormGroup;
  index: number;

  constructor(
    private fb: FormBuilder,
  ) {
    this.formArray = new FormArray([]);
  }

  ngOnInit() {
    console.log('fomr-section');
    this.sectionGroup = this.toFormGroup(this.section);
    this.index = this.formArray.length;
    this.formArray.push(this.sectionGroup);
  }

  toFormGroup(section: Section) {
    return this.fb.group({
      key: section.key,
      name: section.name
    });

  }

}
