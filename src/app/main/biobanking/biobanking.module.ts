import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiobankingRoutingModule } from './biobanking-routing.module';
import { BiobankingComponent } from './biobanking.component';

import { DragulaModule } from 'ng2-dragula';

@NgModule({
  imports: [
    CommonModule,
    DragulaModule,
    BiobankingRoutingModule
  ],
  declarations: [BiobankingComponent]
})
export class BiobankingModule { }
