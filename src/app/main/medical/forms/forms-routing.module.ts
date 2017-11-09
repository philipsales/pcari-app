import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsListComponent } from './forms-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: FormsListComponent
  },
  { path: '', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
