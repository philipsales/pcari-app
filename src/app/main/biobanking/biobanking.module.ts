import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'app/shared/shared.module';

import { BiobankingRoutingModule } from './biobanking-routing.module';
import { BiobankingComponent } from './biobanking.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BiobankingRoutingModule
  ],
  declarations: [BiobankingComponent]
})
export class BiobankingModule { }
