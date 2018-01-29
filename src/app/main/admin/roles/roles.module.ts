import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }      from '@angular/forms';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesListComponent } from './roles-list.component';
import { RolesCreateComponent } from './roles-create.component';

import { MaterialModule } from 'app/shared/_material/material.module';
import { RolesManageComponent } from './roles-manage/roles-manage.component';


@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RolesRoutingModule,
      MaterialModule
  ],
  declarations: [
      RolesListComponent,
      RolesCreateComponent,
      RolesManageComponent
  ]
})
export class RolesModule { }
