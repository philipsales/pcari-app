import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {   
    path: '', component: AdminComponent,
      children: [
        {
          path: 'users',
          loadChildren: './users/users.module#UsersModule'
        },
        {
          path: 'roles',
          loadChildren: './roles/roles.module#RolesModule'
        },
        {
          path: 'database',
          loadChildren: './database/database.module#DatabaseModule'
        },
        { path: '', redirectTo: 'users' }
      ]
  }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
