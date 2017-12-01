import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { QuestionsCreateComponent } from './questions-create.component';
import { QuestionService }         from './question.service';

@NgModule({
  imports: [
    CommonModule,
    QuestionsRoutingModule
  ],
  providers: [
      QuestionService,
  ],
  declarations: [QuestionsComponent, QuestionsCreateComponent]
})
export class QuestionsModule { }
