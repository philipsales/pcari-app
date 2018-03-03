import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsentformsListComponent } from './biobankforms-list/consentforms-list.component';
import { ConsentformsCreateComponent } from './biobankforms-create/consentforms-create.component';
import { ConsentformsPreviewComponent } from './biobankforms-preview/consentforms-preview.component';
import { ConsentformsUpdateComponent } from './biobankforms-update/consentforms-update.component';

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
  { path: '', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsentformsRoutingModule { }
