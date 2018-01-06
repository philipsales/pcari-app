import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

import { DatePickerModule } from 'angular-io-datepicker';

//DragnDrop
import { OverlayModule } from 'angular-io-overlay';
import { DragulaModule, DragulaService } from 'ng2-dragula';

//InMemory modules
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormDummyApiResponse } from 'app/core/services-dummy';

//Services
import { FormService }         from 'app/core/services';
import { SharedDataService }   from 'app/core/services';
import { RegTypeService }      from 'app/core/services';
import { DepartmentService }   from 'app/core/services';

//Utils
import { KeysPipe } from 'app/core/utils';
import { KeyGenerator } from 'app/core/utils';

import { FormRoutingModule } from './form-routing.module';
import { FormListComponent } from './form-list.component';


//DFORMS
import { DformsComponent }              from './forms_dforms/dforms.component';
import { DynamicFormComponent }         from './forms_dforms/dynamic-form.component';
import { DynamicFormQuestionComponent } from './forms_dforms/dynamic-form-question.component';

//FORM services
import { QuestionControlService }  from './forms_dforms/question-control.service';


//NESTED DFORMS
import { FormCreateComponent }           from './forms_detail/form-create.component';

import { FormSectionArrayComponent }     from './forms_section/form-section-array.component';
import { FormSectionComponent }          from './forms_section/form-section.component';

import { QuestionContentArrayComponent } from './forms_question/question-content-array.component';
import { QuestionContentComponent }      from './forms_question/question-content.component';

import { QuestionOptionArrayComponent }  from './forms_option/question-option-array.component';
import { QuestionOptionComponent }       from './forms_option/question-option.component';


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
//Utils
    KeysPipe,

//Editor
    FormListComponent,

//Dforms
    DformsComponent, 
    DynamicFormComponent, 
    DynamicFormQuestionComponent, 

//Nested Dforms
    FormCreateComponent,
    FormSectionArrayComponent, 
    FormSectionComponent,

    QuestionContentArrayComponent, 
    QuestionContentComponent,

    QuestionOptionArrayComponent,
    QuestionOptionComponent
  ],
  providers: [ 
    FormDummyApiResponse,
    FormService,
    SharedDataService,
    DepartmentService,
    RegTypeService,

//Dforms
    QuestionControlService,

//DragnDrop
    DragulaService,

//KeyGeneratorUtil
    KeyGenerator

  ]
})
export class FormModule { }
