import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatabaseListComponent } from './database-list.component';
import { DatabaseCreateComponent } from './database-create.component';
import { DatabaseRestoreComponent} from './database-restore.component';

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
      path: 'restore',
      component: DatabaseRestoreComponent
    },
    {path: '', redirectTo: 'list'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DatabaseRoutingModule { }
