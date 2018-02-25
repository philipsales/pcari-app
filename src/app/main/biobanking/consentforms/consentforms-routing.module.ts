import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsentformsListComponent } from './consentforms-list/consentforms-list.component';
import { ConsentformsCreateComponent } from './consentforms-create/consentforms-create.component';
import { ConsentformsPreviewComponent } from './consentforms-preview/consentforms-preview.component';
import { ConsentformsUpdateComponent } from './consentforms-update/consentforms-update.component';

const routes: Routes = [
  {
    path: 'list',
    component: ConsentformsListComponent
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
    component: ConsentformsUpdateComponent
  },
  {path: '', redirectTo: 'list'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsentformsRoutingModule { }
