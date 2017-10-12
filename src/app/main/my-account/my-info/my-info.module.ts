import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyInfoRoutingModule } from './my-info-routing.module';
import { MyInfoComponent } from './my-info.component';

@NgModule({
  imports: [
    CommonModule,
    MyInfoRoutingModule
  ],
  declarations: [MyInfoComponent]
})
export class MyInfoModule { }
