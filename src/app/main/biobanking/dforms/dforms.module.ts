import { NgModule } from '@angular/core';
import { ReactiveFormsModule }     from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DformsComponent } from './dforms.component';
import { DformsRoutingModule } from './dforms-routing.module';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { QuestionControlService }  from './question-control.service';
import { QuestionService }         from './question.service';

@NgModule({
  imports: [
      CommonModule,
      ReactiveFormsModule,
      DformsRoutingModule
  ],
  providers: [
      QuestionService,
      QuestionControlService
  ],
  declarations: [DformsComponent, DynamicFormComponent, DynamicFormQuestionComponent]
})
export class DformsModule { }
