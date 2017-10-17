import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
	path: '',
	loadChildren: './main/main.module#MainModule',
	//canActivate: [AuthGuard]
    },
    {
	path: 'login',
	loadChildren: 'app/auth/auth.module#AuthModule'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

