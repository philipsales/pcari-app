import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersCreateComponent } from './users-create.component';
import { UsersListComponent } from './users-list.component';
import { UsersViewComponent } from 'app/main/admin/users/users-view.component';
import { UsersUpdateComponent } from 'app/main/admin/users/users-update.component';

const routes: Routes = [
    {
        path: 'list',
        component: UsersListComponent,
    },
    {
        path: 'view/:id',
        component: UsersViewComponent
    },
    {
        path: 'update/:id',
        component: UsersUpdateComponent
    },
    {
       path: 'create',
        component: UsersCreateComponent
    },
    {path: '', redirectTo: 'list'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
