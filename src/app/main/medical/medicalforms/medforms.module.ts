import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { MaterialModule } from 'app/shared/_material/material.module';
import { SharedModule } from 'app/shared/shared.module';

import { MedformsRoutingModule } from './medforms-routing.module';
import { MedformsListComponent } from './medforms-list/medforms-list.component';
import { MedformsCreateComponent } from './medforms-create/medforms-create.component';
import { MedformsPreviewComponent } from './medforms-preview/medforms-preview.component';
import { MedformsUpdateComponent } from './medforms-update/medforms-update.component';

import {
  FormService,
  DepartmentService,
  RegTypeService,
  OrganizationService
} from 'app/core/services';
import { FormDummyApiResponse } from 'app/core/services-dummy';
import { KeyGenerator } from 'app/core/utils';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    InMemoryWebApiModule.forRoot(FormDummyApiResponse, {
      passThruUnknownUrl: true, delay: 1000
    }),
    MedformsRoutingModule
  ],
  declarations: [
    MedformsListComponent,
    MedformsCreateComponent,
    MedformsPreviewComponent,
    MedformsUpdateComponent
  ],
  providers: [
    FormService,
    DepartmentService,
    RegTypeService,
    OrganizationService,
    KeyGenerator
  ]
})
export class MedformsModule { }
