import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiobankingRoutingModule } from './biobanking-routing.module';
import { BiobankingComponent } from './biobanking.component';

@NgModule({
  imports: [
    CommonModule,
    BiobankingRoutingModule
  ],
  declarations: [BiobankingComponent]
})
export class BiobankingModule { }
