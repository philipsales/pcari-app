import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }  from '@angular/forms';

//InMemory modules
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormDummyApiResponse } from 'app/core/services-dummy';

import { FormRoutingModule } from './form-routing.module';
import { FormService } from 'app/core/services';

import { FormListComponent } from './form-list.component';

import { QuestionCreateComponent } from './question-create.component';
import { FormQuestionService } from './form-question.service';


import { FormQuestionDetailComponent } from './form-question-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(FormDummyApiResponse),
    FormRoutingModule
  ],
  declarations: [
    FormListComponent,
    QuestionCreateComponent,
    FormQuestionDetailComponent
  ],
  providers: [ 
    FormDummyApiResponse,
    FormService,
    FormQuestionService
  ]
})
export class FormModule { }
