import { Component, OnInit, Output, Input, EventEmitter, OnChanges, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { KeyGenerator } from 'app/core/utils';

import { Question, Form, Section } from 'app/core/models';
import { FormService } from 'app/core/services';

import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-dforms',
  templateUrl: './dforms.component.html',
  styleUrls: ['./dforms.component.css']
})
export class DformsComponent implements OnInit {

  private templateForm: FormGroup;
  private data: Form;
  private forms: Form;
  private payLoad = '';

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private route: ActivatedRoute,
    private location: Location,
    private keyGenerator: KeyGenerator
  ) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log('PREVIEW',id);
    this.initPreviewForm(id);

    //TODO: IF new creation
    //this.data = this.initForm();
    //this.templateForm = this.toFormGroup(this.data);
  }

  initPreviewForm(id: number): void {

    //SERVICE with get index
    this.formService
        .getForm(id)
        .subscribe(
          existingForm => {
            console.log('-ACTUALservice',existingForm);
            this.data = existingForm;
          }
        );
  }


  toFormGroup(data: Form){
    return this.fb.group({
      id: data.id, 
      name: data.name 
    });
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.templateForm.value);
  }//--onSubmit

  onBack() {
    this.location.back();
  }


}
