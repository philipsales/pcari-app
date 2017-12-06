import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasesListComponent } from './cases-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: CasesListComponent
  },
  { path: '', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesRoutingModule { }
