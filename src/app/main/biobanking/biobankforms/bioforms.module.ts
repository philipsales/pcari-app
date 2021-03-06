import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { MaterialModule } from 'app/shared/_material/material.module';
import { SharedModule } from 'app/shared/shared.module';
import { KeyGenerator } from 'app/core/utils';
import { FormDummyApiResponse } from 'app/core/services-dummy';
import { FormService, DepartmentService, RegTypeService, OrganizationService } from 'app/core/services';

import { ConsentformsRoutingModule } from './bioforms-routing.module';
import { BioformsListComponent } from './bioforms-list/bioforms-list.component';
import { BioformsCreateComponent } from './bioforms-create/bioforms-create.component';
import { BioformsUpdateComponent } from './bioforms-update/bioforms-update.component';
import { BioformsPreviewComponent } from './bioforms-preview/bioforms-preview.component';

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
    BioformsListComponent,
    BioformsCreateComponent,
    BioformsUpdateComponent,
    BioformsPreviewComponent
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
