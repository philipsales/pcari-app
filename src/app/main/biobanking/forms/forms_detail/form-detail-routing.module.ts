import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionCreateComponent }   from './question-create.component';

const routes: Routes = [
    { 
      path: 'create', 
      component: QuestionCreateComponent,
    },
    {path: '', redirectTo: 'create'}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FormDetailRoutingModule{ }
