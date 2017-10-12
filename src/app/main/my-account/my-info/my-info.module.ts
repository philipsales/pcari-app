import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { MyInfoRoutingModule } from './my-info-routing.module';
import { MyInfoComponent } from './my-info.component';

@NgModule({
  imports: [
      CommonModule,
      SharedModule,      
      MyInfoRoutingModule,
  ],
  declarations: [MyInfoComponent]
})
export class MyInfoModule { }
