import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicalComponent } from './medical.component';

const routes: Routes = [
  {
    path: '', component: MedicalComponent,
      children: [
        {
          path: 'cases',
          loadChildren: './medicalcase/medicalcase.module#MedicalcaseModule'
        },
        {
          path: 'forms',
          loadChildren: './forms/form.module#FormModule'
        },
        {
          path: 'medforms',
          loadChildren: './medforms/medforms.module#MedformsModule'
        },
        {
          path: 'reports',
          loadChildren: './reports/reports-medical.module#ReportsMedicalModule'
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
