import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './_components/user-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserFormComponent
  ],
  exports: [
    UserFormComponent
  ]
})
export class SharedModule { }
