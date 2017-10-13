import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
    {   path: '', component: MainComponent,
	children: [
	    {
		path: 'admin',
		loadChildren: './admin/admin.module#AdminModule'
	    },
	    {
		path: 'biobanking',
		loadChildren: './biobanking/biobanking.module#BiobankingModule'
	    },
	    {
		path: 'my-account',
		loadChildren: './my-account/my-account.module#MyAccountModule'
	    },
	    { path: '', redirectTo: 'admin' }
	]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
