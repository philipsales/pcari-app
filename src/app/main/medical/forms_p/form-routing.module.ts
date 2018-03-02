import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormListComponent } from './form-list.component';
import { FormCreateComponent } from './forms_detail/form-create.component';

import { DformsComponent } from './forms_dforms/dforms.component';
import { FormUpdateComponent } from './forms_detail/form-update.component';

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
      path: 'update/:id',
      component: FormUpdateComponent
    },
    {path: '', redirectTo: 'list'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormRoutingModule { }
