import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule, Http, RequestOptions } from '@angular/http';

import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

import {
    UserService,
    RoleService,
    PositionService,
    OrganizationService,
    AuthService,
    CaseService,
    PermissionService
} from './services';

@NgModule({
    imports: [
      CommonModule,
      HttpModule,
      HttpClientModule,
      JwtModule.forRoot({
        config: {
          tokenGetter: () => {
            return localStorage.getItem('access_token');
          },
          authScheme: 'JWT ',
          whitelistedDomains: ['localhost:3001']
        }
      })
    ],
  providers: [
    UserService,
    RoleService,
    PositionService,
    OrganizationService,
    AuthService,
    CaseService,
    PermissionService
  ],
    declarations: [],
})
export class CoreModule { }
