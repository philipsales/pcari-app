import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MedcaseRoutingModule } from './medcase-routing.module';

import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/_material/material.module';
import { MatTableModule } from '@angular/material';

import { CaseListComponent } from './case-list.component';
import { CaseViewComponent } from './case-view.component';
import { CaseCreateComponent } from './case-create.component';
import { CaseUpdateComponent } from './case-update.component';
import { CaseFormsComponent } from './case-forms/case-forms.component';
import { CaseFormsUpdateComponent } from './case-forms/case-forms-update.component';

import {
  CaseService,
  FormService,
  IcdoncologyService
} from 'app/core/services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    MatTableModule,
    MedcaseRoutingModule
  ],
  declarations: [
    CaseListComponent,
    CaseViewComponent,
    CaseCreateComponent,
    CaseUpdateComponent,
    CaseFormsComponent,
    CaseFormsUpdateComponent
  ],
  providers: [
    CaseService,
    FormService,
    IcdoncologyService
  ]
})
export class MedcaseModule { }
