import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

//InMemory modules
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DatabaseDummyApiResponse } from 'app/core/services-dummy';

import { DatabaseRoutingModule } from './database-routing.module';
import { DatabaseService } from 'app/core/services';

import { DatabaseListComponent } from './database-list.component';
import { DatabaseCreateComponent } from './database-create.component';
import { DatabaseRestoreComponent } from './database-restore.component';

import { KeysPipe } from 'app/core/utils';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
   // InMemoryWebApiModule.forRoot(DatabaseDummyApiResponse),
    DatabaseRoutingModule
  ],
  declarations: [
    KeysPipe,
    DatabaseListComponent,
    DatabaseCreateComponent,
    DatabaseRestoreComponent
  ],
  providers: [ 
    //DatabaseDummyApiResponse,
    DatabaseService
  ]
})
export class DatabaseModule { }
