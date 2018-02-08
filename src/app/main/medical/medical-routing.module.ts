import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicalComponent } from './medical.component';

const routes: Routes = [
  {
    path: '', component: MedicalComponent,
      children: [
        {
          path: 'cases',
          loadChildren: './cases/cases.module#CasesModule'
        },
        {
          path: 'forms',
          loadChildren: './forms/form.module#FormModule'
        },
        {
          path: 'reports',
          loadChildren: './reports/reports-medical.module#ReportsMedicalModule'
        },
        { path: '', redirectTo: 'reports' }
      ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalRoutingModule { }
