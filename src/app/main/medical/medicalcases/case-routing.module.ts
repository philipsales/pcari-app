import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseListComponent } from './case-list.component';

import { CaseViewComponent } from './case-view.component';
import { CaseCreateComponent } from './case-create.component';
import { CaseUpdateComponent } from './case-update.component';
import { CaseFormsComponent } from './case-forms/case-forms.component';
import { CaseFormsUpdateComponent } from './case-forms/case-forms-update.component';

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
    path: 'create',
    component: CaseCreateComponent
  },
  {
    path: 'update/:id',
    component: CaseUpdateComponent
  },
  {
    path: 'view/:id/forms/:formid',
    component: CaseFormsComponent
  },
  {
    path: 'update/:id/forms/:formid',
    component: CaseFormsUpdateComponent
  },
  { path: '', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseRoutingModule { }
