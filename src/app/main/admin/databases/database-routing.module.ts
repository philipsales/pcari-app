import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatabaseListComponent } from './database-list.component';
import { DatabaseCreateComponent } from './database-create.component';

const routes: Routes = [
  {
    path: 'list',
    component: DatabaseListComponent
  },
  {
    path: 'create',
    component: DatabaseCreateComponent
  },
  {
    path: 'update/:id',
    component: DatabaseCreateComponent
  },
  {
    path: 'view/:id',
    component: DatabaseCreateComponent
  },
  { path: '', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabaseRoutingModule { }
