import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { MaterialModule } from 'app/shared/_material/material.module';
import { SharedModule } from 'app/shared/shared.module';
import { KeyGenerator } from 'app/core/utils';
import { FormDummyApiResponse } from 'app/core/services-dummy';
import { FormService, DepartmentService, RegTypeService, OrganizationService } from 'app/core/services';

import { ConsentformsRoutingModule } from './consentforms-routing.module';
import { ConsentformsListComponent } from './consentforms-list/consentforms-list.component';
import { ConsentformsCreateComponent } from './consentforms-create/consentforms-create.component';
import { ConsentformsUpdateComponent } from './consentforms-update/consentforms-update.component';
import { ConsentformsPreviewComponent } from './consentforms-preview/consentforms-preview.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    InMemoryWebApiModule.forRoot(FormDummyApiResponse, {
      passThruUnknownUrl: true, delay: 1000
    }),
    ConsentformsRoutingModule
  ],
  declarations: [
    ConsentformsListComponent,
    ConsentformsCreateComponent,
    ConsentformsUpdateComponent,
    ConsentformsPreviewComponent
  ],
  providers: [
    FormService,
    DepartmentService,
    RegTypeService,
    OrganizationService,
    KeyGenerator
  ]
})
export class ConsentformsModule { }
