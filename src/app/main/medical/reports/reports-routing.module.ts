import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportListComponent } from './reports-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ReportListComponent
  },
  { path: '', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
