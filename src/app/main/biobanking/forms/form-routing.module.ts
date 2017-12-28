import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormListComponent }   from './form-list.component';
import { FormCreateComponent }   from './forms_detail/form-create.component';
import { QuestionViewComponent }   from './forms_detail/question-view.component';

import { DformsComponent } from './forms_dforms/dforms.component';

const routes: Routes = [
    { 
      path: 'list', 
      component: FormListComponent
    },
    { 
      path: 'create', 
      component: FormCreateComponent 
    },
    { 
      path: 'preview/:id', 
      component: DformsComponent 
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
