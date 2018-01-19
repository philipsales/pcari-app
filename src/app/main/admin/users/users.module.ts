import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'app/shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersCreateComponent } from './users-create.component';
import { UsersListComponent } from './users-list.component';

@NgModule({
  imports: [
      CommonModule,
      SharedModule,
      UsersRoutingModule,
  ],
  declarations: [
      UsersCreateComponent,
      UsersListComponent
  ]
})
export class UsersModule { }
