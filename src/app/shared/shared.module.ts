import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';

import { UserFormComponent } from './_components/user-form.component';

import { MaterialModule } from 'app/shared/_material/material.module';
import { EllipsisPipe } from './_pipes/ellipsis.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2CompleterModule,
    MaterialModule
  ],
  declarations: [
    UserFormComponent,
    EllipsisPipe
  ],
  exports: [
    UserFormComponent,
    EllipsisPipe
  ]
})
export class SharedModule { }
