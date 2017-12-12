import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';

import { QuestionSectionComponent } from './question-section.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [QuestionSectionComponent]
})
export class QuestionSectionModule { }
