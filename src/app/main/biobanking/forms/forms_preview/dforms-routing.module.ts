import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DformsComponent } from './dforms.component';

const routes: Routes = [
    {   path: '', component: DformsComponent, }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DformsRoutingModule { }
