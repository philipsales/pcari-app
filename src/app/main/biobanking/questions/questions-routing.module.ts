import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionsComponent } from './questions.component';
import { QuestionsCreateComponent } from './questions-create.component';

const routes: Routes = [
    {
	path: 'list',
	component: QuestionsComponent,
    },
    {
	path: 'create',
	component: QuestionsCreateComponent
    },
    {path: '', redirectTo: 'list'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
