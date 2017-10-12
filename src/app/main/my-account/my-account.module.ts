import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account.component';
import { MyAccountMenuComponent } from './my-account-menu.component';
import { MyAccountMenuTitleComponent } from './my-account-menu-title.component';

@NgModule({
  imports: [
      CommonModule,
      MyAccountRoutingModule
  ],
  declarations: [
      MyAccountComponent,
      MyAccountMenuComponent,
      MyAccountMenuTitleComponent
  ]
})
export class MyAccountModule { }
