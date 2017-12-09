import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module'; 
import { MainComponent } from './main.component';
import { MainNavComponent } from './main-nav.component';


@NgModule({
  imports: [
      CommonModule,
      MainRoutingModule
  ],
  declarations: [
      MainComponent,
      MainNavComponent
  ]
})
export class MainModule { }
