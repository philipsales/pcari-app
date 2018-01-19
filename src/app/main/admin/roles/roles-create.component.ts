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
    private errors: any = {};
    private has_errors = false;
    private is_processing = false;
    private permissions: Permission[];
    private selected_permissions: String[];

    @ViewChild('permission') permission: MatSelectionList;

    constructor(
        private roleService: RoleService,
        private permissionService: PermissionService,
        private _notificationsService: NotificationsService
    ) {
      this.new_role = new Role('', '', false);
    }// --constructor

  ngOnInit() {
    this.permissionService.getAll().subscribe(
        permissions => {
            console.warn(permissions, 'PERMISSIONS ON service');
            this.permissions = permissions;
        },
        error => {
            console.log(error);
        }
    );
  }

  onPermissionListChanged(list) {
    this.new_role.permissions = this.permission.selectedOptions.selected.map(item => item.value);
    console.log(this.new_role.permissions, 'SELECTED');
  }

  onToggleIsActive(input_isActive: boolean) {
      this.new_role.isActive = input_isActive;
  }

  onSaveClick(role: Role) {
      console.log(role, 'My Role');
      this.errors = {};
      this.has_errors = false;
      this.is_processing = true;
      this.roleService.create(role).subscribe((created_role: Role) => {
            this.is_processing = false;
            console.log(created_role, 'ROLE CREATED : roles-create.component');
            this._notificationsService.success(
                'New Role : ' + role.name,
                'Successfully Created.',
                {
                    timeOut: 10000,
                    showProgressBar: true,
                    pauseOnHover: false,
                    clickToClose: false,
                }
            );
          },
          errors  => {
            console.log(errors, 'ERROR : roles-create.component');
            this.errors = errors;
            this.has_errors = true;
            this.is_processing = false;
          });
  }// --onSaveClick
}
