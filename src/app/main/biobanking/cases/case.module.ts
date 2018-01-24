import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CaseDummyApiResponse } from 'app/core/services-dummy';

import { CaseRoutingModule } from './case-routing.module';
import { CaseService } from 'app/core/services';

import { CaseListComponent } from './case-list.component';
import { CaseCreateComponent } from './case-create.component';

import { MaterialModule } from 'app/shared/_material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(CaseDummyApiResponse),
    CaseRoutingModule,
    MaterialModule
  ],
  declarations: [
    CaseListComponent,
    CaseCreateComponent
  ],
  providers: [
    CaseDummyApiResponse,
    CaseService
  ]
})
export class CaseModule { }
