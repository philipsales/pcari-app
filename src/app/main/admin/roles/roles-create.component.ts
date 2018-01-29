import { Component, OnInit, ViewChild } from '@angular/core';

import { NotificationsService } from 'angular2-notifications';

import { Role, Permission } from 'app/core/models';
import { RoleService, PermissionService } from 'app/core/services';
import { MatSelectionList } from '@angular/material';

@Component({
  selector: 'app-roles-create',
  templateUrl: './roles-create.component.html',
  styleUrls: ['./roles-create.component.css']
})
export class RolesCreateComponent implements OnInit {

    private new_role: Role;

    constructor() {
      this.new_role = new Role('', '', false);
    }// --constructor

  ngOnInit() {
  }
}
