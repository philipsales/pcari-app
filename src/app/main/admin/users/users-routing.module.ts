import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersCreateComponent } from './users-create.component';
import { UsersListComponent } from './users-list.component';

const routes: Routes = [
    {
	path: 'list',
	component: UsersListComponent,
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
