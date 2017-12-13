import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateListComponent } from './template-list.component';
import { QuestionCreateComponent } from './question-create.component';
import { QuestionViewComponent } from './question-view.component';


const routes: Routes = [
    { 
      path: 'list', 
      component: TemplateListComponent
    },
    { 
      path: 'create', 
      component: QuestionCreateComponent
    },
    { 
      path: 'view/:id', 
      component: QuestionViewComponent
    },
    {path: '', redirectTo: 'list'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormRoutingModule { }
