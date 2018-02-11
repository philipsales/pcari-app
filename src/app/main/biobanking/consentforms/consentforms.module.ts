import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'app/shared/_material/material.module';
import { SharedModule } from 'app/shared/shared.module';

import { ConsentformsRoutingModule } from './consentforms-routing.module';
import { ConsentformsListComponent } from './consentforms-list/consentforms-list.component';
import { ConsentformsCreateComponent } from './consentforms-create/consentforms-create.component';
import { ConsentformsUpdateComponent } from './consentforms-update/consentforms-update.component';
import { ConsentformsPreviewComponent } from './consentforms-preview/consentforms-preview.component';
import { FormService } from 'app/core/services';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ConsentformsRoutingModule
  ],
  declarations: [
    ConsentformsListComponent,
    ConsentformsCreateComponent,
    ConsentformsUpdateComponent,
    ConsentformsPreviewComponent
  ],
  providers: [
    FormService
  ]
})
export class ConsentformsModule { }
