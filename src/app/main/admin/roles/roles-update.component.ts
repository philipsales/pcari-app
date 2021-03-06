import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

import { RoleService } from 'app/core/services';

import { Role } from 'app/core/models';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NoJWTError } from 'app/core/errors';
import { RoleJSON } from 'app/core/interfaces';

@Component({
  selector: 'app-roles-update',
  templateUrl: './roles-update.component.html',
  styleUrls: ['./roles-update.component.css']
})
export class RolesUpdateComponent implements OnInit {

  role: Role;
  role_id: string;

  constructor(
    private route: ActivatedRoute,
    private roleService: RoleService
  ) {
    this.role = new Role('', '', true);
  }

  ngOnInit() {
    this.role_id = this.route.snapshot.paramMap.get('id');
    this.roleService.get(this.role_id).subscribe((response: Role) => {
      delete this.role;
      this.role = response;
      console.log(response);
    }, error => {
      console.log(error); // get the error in error handler
      if (error instanceof NoJWTError) {
        console.warn('TO DO : handle JWT Expired');
      }
    });
  }

}
