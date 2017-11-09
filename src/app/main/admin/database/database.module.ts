import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

//InMemory modules
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'app/core/services';

import { DatabaseRoutingModule } from './database-routing.module';
import { DatabaseListComponent } from './database-list.component';

import { DatabaseService } from 'app/core/services';
import { DatabaseCreateComponent } from './database-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    DatabaseRoutingModule
  ],
  declarations: [
    DatabaseListComponent,
    DatabaseCreateComponent
  ],
  providers: [ 
    InMemoryDataService,
    DatabaseService
  ]
})
export class DatabaseModule { }
