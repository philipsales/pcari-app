import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicalComponent } from './medical.component';

const routes: Routes = [
  {
    path: '', component: MedicalComponent,
    children: [
      {
        path: 'cases',
        loadChildren: './medicalcases/medicalcase.module#MedicalcaseModule'
      },
      {
        path: 'medforms',
        loadChildren: './medicalforms/medforms.module#MedformsModule'
      },
      {
        path: 'reports',
        loadChildren: './biobankreports/reports-medical.module#ReportsMedicalModule'
      },
      { path: '', redirectTo: 'cases' }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalRoutingModule { }
