import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

//InMemory modules
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CaseDummyApiResponse } from 'app/core/services-dummy';

import { CaseRoutingModule } from './case-routing.module';
import { CaseService } from 'app/core/services';

import { CaseListComponent } from './case-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(CaseDummyApiResponse),
    CaseRoutingModule
  ],
  declarations: [
    CaseListComponent
  ],
  providers: [ 
    CaseDummyApiResponse,
    CaseService
  ]
})
export class CaseModule { }
