import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

//InMemory modules
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormDummyApiResponse } from 'app/core/services-dummy';

import { FormRoutingModule } from './form-routing.module';
import { FormService } from 'app/core/services';

import { FormListComponent } from './form-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(FormDummyApiResponse),
    FormRoutingModule
  ],
  declarations: [
    FormListComponent
  ],
  providers: [ 
    FormDummyApiResponse,
    FormService
  ]
})
export class FormModule { }
