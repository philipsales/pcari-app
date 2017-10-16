import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }      from '@angular/forms';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesListComponent } from './roles-list.component';
import { RolesCreateComponent } from './roles-create.component';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RolesRoutingModule
  ],
  declarations: [
      RolesListComponent,
      RolesCreateComponent
  ]
})
export class RolesModule { }
