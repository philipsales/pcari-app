import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DformsComponent } from './dforms.component';

import { DformsRoutingModule } from './dforms-routing.module';

@NgModule({
  imports: [
      CommonModule,
      DformsRoutingModule
  ],
  declarations: [DformsComponent]
})
export class DformsModule { }
