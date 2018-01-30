import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsentListComponent } from './consent-list.component';
import { ConsentCreateComponent } from './consent-create.component';

const routes: Routes = [
  {
    path: 'list',
    component: ConsentListComponent
  },
  {
    path: 'create',
    component: ConsentCreateComponent
  },
  {
    path: 'update/:id',
    component: ConsentCreateComponent
  },
  {
    path: 'view/:id',
    component: ConsentCreateComponent
  },
  { path: '', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsentRoutingModule { }
