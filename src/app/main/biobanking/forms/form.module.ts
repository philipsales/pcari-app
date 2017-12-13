import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

//InMemory modules
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormDummyApiResponse } from 'app/core/services-dummy';

import { FormRoutingModule } from './form-routing.module';
import { FormService } from 'app/core/services';

import { TemplateListComponent } from './template-list.component';

import { QuestionDetailComponent } from './question-detail.component';
import { QuestionCreateComponent } from './question-create.component';
import { QuestionViewComponent } from './question-view.component';
import { QuestionSectionComponent} from './../forms_section/question-section.component';
import { FormQuestionService } from './form-question.service';


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
    TemplateListComponent,
    QuestionCreateComponent,
    QuestionViewComponent,
    QuestionDetailComponent,
    QuestionSectionComponent
  ],
  providers: [ 
    FormDummyApiResponse,
    FormService,
    FormQuestionService
  ]
})
export class FormModule { }
