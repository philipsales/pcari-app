import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioformsListComponent } from './bioforms-list/bioforms-list.component';
import { BioformsCreateComponent } from './bioforms-create/bioforms-create.component';
import { BioformsPreviewComponent } from './bioforms-preview/bioforms-preview.component';
import { BioformsUpdateComponent } from './bioforms-update/bioforms-update.component';

const routes: Routes = [
  {
    path: 'list',
    component: BioformsListComponent
  },
  {
    path: 'create',
    component: BioformsCreateComponent
  },
  {
    path: 'preview/:origin',
    component: BioformsPreviewComponent
  },
  {
    path: 'update',
    component: BioformsUpdateComponent
  },
  { path: '', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsentformsRoutingModule { }
