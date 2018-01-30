import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CaseDummyApiResponse } from 'app/core/services-dummy';

import { CaseRoutingModule } from './case-routing.module';
import {
  CaseService,
  FormService
} from 'app/core/services';


import { CaseListComponent } from './case-list.component';
import { CaseCreateComponent } from './case-create.component';

import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/_material/material.module';
import { CaseManageComponent } from './case-manage/case-manage.component';
import { CaseViewComponent } from './case-view.component';
import { CaseUpdateComponent } from './case-update.component';
import { CaseFormManageComponent } from './case-manage/case-form-manage.component';
import { CaseFormAddComponent } from './case-manage/case-form-add.component';
import { MatTableModule } from '@angular/material';
import { CaseFormsComponent } from './case-forms/case-forms.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule,
    InMemoryWebApiModule.forRoot(CaseDummyApiResponse),
    CaseRoutingModule,
    MatTableModule,
    MaterialModule
  ],
  declarations: [
    CaseListComponent,
    CaseCreateComponent,
    CaseManageComponent,
    CaseViewComponent,
    CaseUpdateComponent,
    CaseFormManageComponent,
    CaseFormAddComponent,
    CaseFormsComponent
  ],
  providers: [
    CaseDummyApiResponse,
    CaseService,
    FormService
  ]
})
export class CaseModule { }
