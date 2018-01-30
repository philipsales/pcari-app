import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//InMemory modules
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ConsentDummyApiResponse } from 'app/core/services-dummy';

import { MaterialModule } from 'app/shared/_material/material.module';

import { ConsentRoutingModule } from './consent-routing.module';
import { ConsentService } from 'app/core/services';

import { ConsentListComponent } from './consent-list.component';
import { ConsentCreateComponent } from './consent-create.component';

import { ErrorStateMatcher } from '@angular/material/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(ConsentDummyApiResponse),
    MaterialModule,
    ConsentRoutingModule
  ],
  declarations: [
    ConsentListComponent,
    ConsentCreateComponent
  ],
  providers: [
    //ConsentDummyApiResponse,
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    ConsentService
  ]
})
export class ConsentModule { }
