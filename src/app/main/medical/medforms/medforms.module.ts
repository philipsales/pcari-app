import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'app/shared/_material/material.module';
import { SharedModule } from 'app/shared/shared.module';

import { MedformsRoutingModule } from './medforms-routing.module';
import { MedformsListComponent } from './medforms-list/medforms-list.component';
import { MedformsCreateComponent } from './medforms-create/medforms-create.component';
import { MedformsPreviewComponent } from './medforms-preview/medforms-preview.component';
import { MedformsUpdateComponent } from './medforms-update/medforms-update.component';

import { FormService } from 'app/core/services';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    MedformsRoutingModule
  ],
  declarations: [
    MedformsListComponent,
    MedformsCreateComponent,
    MedformsPreviewComponent,
    MedformsUpdateComponent
  ],
  providers: [
    FormService
  ]
})
export class MedformsModule { }
