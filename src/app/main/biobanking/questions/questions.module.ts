import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }       from '@angular/forms';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { QuestionsCreateComponent } from './questions-create.component';
import { QuestionService }         from './question.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionsRoutingModule
  ],
  providers: [
      QuestionService,
  ],
  declarations: [QuestionsComponent, QuestionsCreateComponent]
})
export class QuestionsModule { }
