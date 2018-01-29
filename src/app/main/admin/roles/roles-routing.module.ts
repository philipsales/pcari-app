import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesListComponent } from './roles-list.component';
import { RolesCreateComponent } from './roles-create.component';
import { RolesViewComponent } from 'app/main/admin/roles/roles-view.component';
import { RolesUpdateComponent } from 'app/main/admin/roles/roles-update.component';

const routes: Routes = [
    {
        path: 'list',
        component: RolesListComponent
    },
    {
        path: 'view/:id',
        component: RolesViewComponent
    },
    {
        path: 'update/:id',
        component: RolesUpdateComponent
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
