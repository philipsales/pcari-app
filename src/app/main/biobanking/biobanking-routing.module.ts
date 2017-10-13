import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiobankingComponent } from './biobanking.component';

const routes: Routes = [
    {   path: '', component: BiobankingComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiobankingRoutingModule { }
