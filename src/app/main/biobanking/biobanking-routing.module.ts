import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiobankingComponent } from './biobanking.component';

const routes: Routes = [
  {
    path: '', component: BiobankingComponent,
    children: [
      {
        path: 'cases',
        loadChildren: './biobankcases/case.module#CaseModule'
      },
      {
        path: 'forms',
        loadChildren: './biobankforms/biobankforms.module#ConsentformsModule'
      },
      {
        path: 'reports',
        loadChildren: './biobankreports/reports-biobanking.module#ReportsBiobankingModule'
      },
      { path: '', redirectTo: 'cases' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiobankingRoutingModule { }
