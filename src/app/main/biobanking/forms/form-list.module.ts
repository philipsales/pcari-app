import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

//InMemory modules
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormDummyApiResponse } from 'app/core/services-dummy';

import { FormRoutingModule } from './form-routing.module';
import { FormListComponent } from './form-list.component';
import { FormService } from 'app/core/services';
import { FormQuestionService } from './forms_detail/form-question.service';
 

import { QuestionDetailComponent }  from './forms_detail/question-detail.component';
import { QuestionCreateComponent }  from './forms_detail/question-create.component';
import { QuestionViewComponent }    from './forms_detail/question-view.component';
import { QuestionSectionComponent}  from './forms_section/question-section.component';

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
export class FormListModule { }
