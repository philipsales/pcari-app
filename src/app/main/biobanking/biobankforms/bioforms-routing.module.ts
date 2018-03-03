import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioformsListComponent } from './bioforms-list/bioforms-list.component';
import { ConsentformsCreateComponent } from './bioforms-create/consentforms-create.component';
import { ConsentformsPreviewComponent } from './bioforms-preview/consentforms-preview.component';
import { BioformsUpdateComponent } from './bioforms-update/bioforms-update.component';

const routes: Routes = [
  {
    path: 'list',
    component: BioformsListComponent
  },
  {
    path: 'create',
    component: ConsentformsCreateComponent
  },
  {
    path: 'preview/:origin',
    component: ConsentformsPreviewComponent
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
