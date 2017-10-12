import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesListComponent } from './roles-list.component';
import { RolesCreateComponent } from './roles-create.component';

const routes: Routes = [
    {
	path: 'list',
	component: RolesListComponent
    },
    {
	path: 'create',
	component: RolesCreateComponent
    },
    {path: '', redirectTo: 'list'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RolesRoutingModule { }
