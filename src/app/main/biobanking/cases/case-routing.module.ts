import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaseListComponent } from './case-list.component';
import { CaseCreateComponent } from './case-create.component';
import { CaseViewComponent } from './case-view.component';
import { CaseUpdateComponent } from './case-update.component';
import { CaseFormsComponent } from 'app/main/biobanking/cases/case-forms/case-forms.component';
import { CaseFormsUpdateComponent } from 'app/main/biobanking/cases/case-forms/case-forms-update.component';

const routes: Routes = [
    {
      path: 'list',
      component: CaseListComponent
    },
    {
        path: 'view/:id',
        component: CaseViewComponent
    },
    {
        path: 'view/:id/forms/:formid',
        component: CaseFormsComponent
    },
    {
        path: 'update/:id',
        component: CaseUpdateComponent
    },
    {
        path: 'update/:id/forms/:formid',
        component: CaseFormsUpdateComponent
    },
    {
        path: 'create',
        component: CaseCreateComponent
    },
    {path: '', redirectTo: 'list'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CaseRoutingModule { }
