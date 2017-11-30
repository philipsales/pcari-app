import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiobankingComponent } from './biobanking.component';

const routes: Routes = [
    {   path: '', component: BiobankingComponent,
	children: [
	    {
		path: 'reports',
		loadChildren: './reports/reports.module#ReportsModule'
	    },
	    {
		path: 'dforms',
		loadChildren: './dforms/dforms.module#DformsModule'
	    },
	    { path: '', redirectTo: 'reports' }
	]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiobankingRoutingModule { }
