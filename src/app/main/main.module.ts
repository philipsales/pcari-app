import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'app/shared/shared.module';

import { MainRoutingModule } from './main-routing.module'; 
import { MainComponent } from './main.component';
import { MainNavComponent } from './main-nav.component';



@NgModule({
  imports: [
      CommonModule,
      SharedModule,
      MainRoutingModule
  ],
  declarations: [
      MainComponent,
      MainNavComponent
  ]
})
export class MainModule { }
