import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { DatePickerModule } from 'angular-io-datepicker';
import { OverlayModule } from 'angular-io-overlay';

import { DragulaModule, DragulaService } from 'ng2-dragula';

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

//DFORMS
import { DformsComponent } from './forms_dforms/dforms.component';
import { DynamicFormComponent } from './forms_dforms/dynamic-form.component';
import { DynamicFormQuestionComponent } from './forms_dforms/dynamic-form-question.component';

import { QuestionControlService }  from './forms_dforms/question-control.service';
import { QuestionService }         from './forms_dforms/question.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    DragulaModule,
    OverlayModule,
    DatePickerModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(FormDummyApiResponse),
    FormRoutingModule
  ],
  declarations: [
    FormListComponent,
    QuestionSectionComponent,
    QuestionCreateComponent,
    QuestionViewComponent,
    QuestionDetailComponent,

//Dforms
    DformsComponent, 
    DynamicFormComponent, 
    DynamicFormQuestionComponent
  ],
  providers: [ 
    FormDummyApiResponse,
    FormService,
    FormQuestionService,

//Dforms
    QuestionService,
    QuestionControlService,
//Dragula
    DragulaService 
  ]
})
export class FormModule { }
