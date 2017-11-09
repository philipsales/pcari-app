import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing.module';
import { CasesListComponent } from './cases-list.component';

@NgModule({
  imports: [
    CommonModule,
    CasesRoutingModule
  ],
  declarations: [
    CasesListComponent
  ]
})
export class CasesModule { }
