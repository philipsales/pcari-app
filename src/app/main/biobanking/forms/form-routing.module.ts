import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormListComponent }   from './form-list.component';
import { QuestionCreateComponent }   from './forms_detail/question-create.component';
import { QuestionViewComponent }   from './forms_detail/question-view.component';
import { QuestionSectionComponent }   from './forms_section/question-section.component';

const routes: Routes = [
    { 
      path: 'list', 
      component: FormListComponent
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
