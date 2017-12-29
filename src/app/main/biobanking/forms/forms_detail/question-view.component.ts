import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { Question, Form, Section } from './form-question.model';

import { forms } from './form-question.model';

@Component({
  selector: 'app-form-question',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
}) 

export class QuestionViewComponent implements OnInit {

  private forms: Form[] = [];

  private selectedDepartment: number;
  private departmentCount: number;

  private sections: Section[];

  private selectedQuestion: Question[]=[];
  private questions: Question[]=[];

  private data: Form;
  private templateForm: FormGroup;

  constructor(
  private fb: FormBuilder,
  private route: ActivatedRoute
  ) { 
  }

  ngOnInit() {
    //REFRACTOR TO DUMMY-SERVICE
    let index = this.route.snapshot.paramMap.get('id');
    this.data = forms;
    this.templateForm = this.toFormGroup(this.data);
  }

  toFormGroup(data: Form){
    return this.fb.group({
      id: data.id, 
      name: data.name 
    });
  }



  

}
