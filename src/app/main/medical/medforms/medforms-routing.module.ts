import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedformsListComponent } from './medforms-list/medforms-list.component';
import { MedformsCreateComponent } from './medforms-create/medforms-create.component';
import { MedformsPreviewComponent } from './medforms-preview/medforms-preview.component';
import { MedformsUpdateComponent } from './medforms-update/medforms-update.component';

const routes: Routes = [
  {
    path: 'list',
    component: MedformsListComponent
  },
  {
    path: 'create',
    component: MedformsCreateComponent
  },
  {
    path: 'preview/:id',
    component: MedformsPreviewComponent
  },
  {
    path: 'update',
    component: MedformsUpdateComponent
  },
  {path: '', redirectTo: 'list'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedformsRoutingModule { }
