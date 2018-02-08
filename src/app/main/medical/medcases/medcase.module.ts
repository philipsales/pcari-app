import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CaseDummyApiResponse } from 'app/core/services-dummy';

import { MedCaseRoutingModule } from './medcase-routing.module';
import {
  CaseService,
  FormService
} from 'app/core/services';

import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/_material/material.module';
import { MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule,
    InMemoryWebApiModule.forRoot(CaseDummyApiResponse),
    MedCaseRoutingModule,
    MatTableModule,
    MaterialModule
  ],
  declarations: [
  ],
  providers: [
    CaseDummyApiResponse,
    CaseService,
    FormService
  ]
})
export class MedCaseModule { }
