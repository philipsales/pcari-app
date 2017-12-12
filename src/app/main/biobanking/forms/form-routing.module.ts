import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormListComponent } from './form-list.component';
//TODO: rename to FormQuestionsCreateComponent
import { QuestionsCreateComponent } from './questions-create.component';

import { FormQuestionComponent } from './form-question.component';


const routes: Routes = [
    { 
      path: 'list', 
      component: FormListComponent
    },
    { 
      path: 'create', 
      component: FormQuestionComponent
    },
    {path: '', redirectTo: 'list'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormRoutingModule { }
