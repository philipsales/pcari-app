import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }      from '@angular/forms';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesListComponent } from './roles-list.component';
import { RolesCreateComponent } from './roles-create.component';

import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/_material/material.module';
import { RolesManageComponent } from './roles-manage/roles-manage.component';
import { RolesUpdateComponent } from './roles-update.component';
import { RolesViewComponent } from './roles-view.component';


@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RolesRoutingModule,
      MaterialModule,
      SharedModule
  ],
  declarations: [
      RolesListComponent,
      RolesCreateComponent,
      RolesManageComponent,
      RolesUpdateComponent,
      RolesViewComponent
  ]
})
export class RolesModule { }
