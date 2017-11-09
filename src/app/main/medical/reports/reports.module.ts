import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

//InMemory modules
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'app/core/services';

import { ReportRoutingModule } from './reports-routing.module';
import { ReportListComponent } from './reports-list.component';

import { DatabaseService } from 'app/core/services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    ReportRoutingModule
  ],
  declarations: [
    ReportListComponent
  ],
  providers: [ 
    InMemoryDataService,
    DatabaseService
  ]
})
export class ReportsModule { }
