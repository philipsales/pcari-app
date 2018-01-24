import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaseListComponent } from './case-list.component';
import { CaseCreateComponent } from './case-create.component';

const routes: Routes = [
    {
      path: 'list',
      component: CaseListComponent
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
