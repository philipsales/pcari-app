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
	    { path: '', redirectTo: 'admin' }
	]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
