import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalRoutingModule } from './medical-routing.module';
import { MedicalComponent } from './medical.component';

import { SharedModule } from 'app/shared/shared.module';

import { MedicalMenuComponent } from './medical-menu.component';
import { MedicalMenuTitleComponent } from './medical-menu-title.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MedicalRoutingModule
  ],
  declarations: [
    MedicalComponent,
    MedicalMenuComponent,
    MedicalMenuTitleComponent
  ]
})
export class MedicalModule { }
