import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';

import { UserFormComponent } from './_components/user-form.component';

import { MaterialModule } from 'app/shared/_material/material.module';
import { EllipsisPipe } from './_pipes/ellipsis.pipe';

import { ConsentService } from 'app/core/services';
import { RegTypeService } from 'app/core/services';
import { DepartmentService } from 'app/core/services';
import { OrganizationService } from 'app/core/services';

// DFORMS
// import { DformsComponent } from './_components/forms_dforms/dforms.component';
import { DynamicFormComponent } from './_components/forms_dforms/dynamic-form.component';
import { DynamicFormQuestionComponent } from './_components/forms_dforms/dynamic-form-question.component';

// NESTED DFORMS
// import { FormCreateComponent }           from './forms_detail/form-create.component';

import { FormSectionArrayComponent } from './_components/forms_section/form-section-array.component';
import { FormSectionComponent } from './_components/forms_section/form-section.component';

import { QuestionContentArrayComponent } from './_components/forms_question/question-content-array.component';
import { QuestionContentComponent } from './_components/forms_question/question-content.component';

import { QuestionOptionArrayComponent } from './_components/forms_option/question-option-array.component';
import { QuestionOptionComponent } from './_components/forms_option/question-option.component';
import { Consent } from 'app/core/models';
import { PcariformListComponent } from './_components/pcariform-list/pcariform-list.component';
import { RouterModule } from '@angular/router';
import { PcariformManageComponent } from './_components/pcariform-manage/pcariform-manage.component';
import { KeyGenerator } from 'app/core/utils';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormDummyApiResponse } from 'app/core/services-dummy';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(FormDummyApiResponse, {
      passThruUnknownUrl: true, delay: 1000
    }),
    Ng2CompleterModule,
    MaterialModule
  ],
  declarations: [
    UserFormComponent,
    EllipsisPipe,
    // Dforms
    // DformsComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,

    // Nested Dforms
    /// FormCreateComponent,
    FormSectionArrayComponent,
    FormSectionComponent,

    QuestionContentArrayComponent,
    QuestionContentComponent,

    QuestionOptionArrayComponent,
    QuestionOptionComponent,
    PcariformListComponent,
    PcariformManageComponent
  ],
  providers: [
    ConsentService,
    DepartmentService,
    RegTypeService,
    OrganizationService,
    KeyGenerator
  ],
  exports: [
    UserFormComponent,
    EllipsisPipe,
    DynamicFormComponent,
    PcariformListComponent,
    PcariformManageComponent
  ]
})
export class SharedModule { }
