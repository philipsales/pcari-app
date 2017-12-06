import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsListComponent } from './forms-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule
  ],
  declarations: [
    FormsListComponent
  ]
})
export class FormsModule { }
