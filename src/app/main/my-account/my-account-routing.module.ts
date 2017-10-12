import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAccountComponent } from './my-account.component';

const routes: Routes = [
    {   path: '', component: MyAccountComponent,
	children: [
	    {
		path: 'info',
		loadChildren: './my-info/my-info.module#MyInfoModule'
	    },
	    {
		path: 'password',
		loadChildren: './change-password/change-password.module#ChangePasswordModule'
	    },
	    { path: '', redirectTo: 'info' }
	]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }
