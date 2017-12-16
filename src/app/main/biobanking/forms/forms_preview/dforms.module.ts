import { NgModule } from '@angular/core';
import { ReactiveFormsModule }     from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DformsComponent } from './dforms.component';
import { DformsRoutingModule } from './dforms-routing.module';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

import { QuestionControlService }  from './question-control.service';
import { QuestionService }         from './question.service';
import { QuestionSectionComponent} from './../forms_section/question-section.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DformsRoutingModule
  ],
  declarations: [
    DformsComponent, 
    //QuestionSectionComponent,
    DynamicFormComponent, 
    DynamicFormQuestionComponent
  ],
  providers: [
    QuestionService,
    QuestionControlService
  ]
})
export class DformsModule { }
