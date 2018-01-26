import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaseListComponent } from './case-list.component';
import { CaseCreateComponent } from './case-create.component';
import { CaseViewComponent } from './case-view.component';
import { CaseUpdateComponent } from './case-update.component';

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
        path: 'update',
        component: CaseUpdateComponent
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
