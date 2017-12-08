import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormListComponent } from './form-list.component';
//TODO: rename to FormQuestionsCreateComponent
import { QuestionsCreateComponent } from './questions-create.component';

const routes: Routes = [
    { 
      path: 'list', 
      component: FormListComponent
    },
    {
      path: 'create',
//TODO: rename to FormQuestionsCreateComponent
      component: QuestionsCreateComponent 
    },
    {path: '', redirectTo: 'list'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormRoutingModule { }
