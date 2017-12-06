import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

//InMemory modules
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ConsentDummyApiResponse } from 'app/core/services-dummy';

import { ConsentRoutingModule } from './consent-routing.module';
import { ConsentService } from 'app/core/services';

import { ConsentListComponent } from './consent-list.component';
import { ConsentCreateComponent } from './consent-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(ConsentDummyApiResponse),
    ConsentRoutingModule
  ],
  declarations: [
    ConsentListComponent,
    ConsentCreateComponent
  ],
  providers: [ 
    ConsentDummyApiResponse,
    ConsentService 
  ]
})
export class ConsentModule { }
