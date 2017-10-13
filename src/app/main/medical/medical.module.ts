import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalRoutingModule } from './medical-routing.module';
import { MedicalComponent } from './medical.component';

@NgModule({
  imports: [
    CommonModule,
    MedicalRoutingModule
  ],
  declarations: [MedicalComponent]
})
export class MedicalModule { }
