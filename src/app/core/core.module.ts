import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import {
    UserService,
    RoleService,
    PositionService,
    OrganizationService
} from './services';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    tokenGetter: (() => {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      return currentUser && currentUser.token;
    }),
    globalHeaders: [{'Content-Type': 'application/json'}],
  }), http, options);
}

@NgModule({
    imports: [
	CommonModule,
	HttpModule,
    ],
    providers: [
	{
	    provide: AuthHttp,
	    useFactory: authHttpServiceFactory,
	    deps: [Http, RequestOptions]
	},
	UserService,
	RoleService,
	PositionService,
	OrganizationService
    ],
    declarations: [],
})
export class CoreModule { }
