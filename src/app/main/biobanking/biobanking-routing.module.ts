import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiobankingComponent } from './biobanking.component';

const routes: Routes = [
    {   path: '', component: BiobankingComponent,
      children: [
        {
          path: 'cases',
          loadChildren: './cases/case.module#CaseModule'
        },
        {
          path: 'reports',
          loadChildren: './reports/reports-biobanking.module#ReportsBiobankingModule'
        },
        {
          path: 'questions',
          loadChildren: './questions/questions.module#QuestionsModule'
        },
        {
          path: 'forms',
          loadChildren: './forms/form.module#FormModule'
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
