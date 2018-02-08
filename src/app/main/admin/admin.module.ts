import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { AdminMenuComponent } from './admin-menu.component';
import { AdminMenuTitleComponent } from './admin-menu-title.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminMenuComponent,
    AdminMenuTitleComponent
  ]
})
export class AdminModule { }
