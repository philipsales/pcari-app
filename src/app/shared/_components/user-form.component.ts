import { Component, OnInit, ViewChild } from '@angular/core';

import { NotificationsService } from 'angular2-notifications';
import {
    CompleterCmp,
    CompleterService,
    CompleterData,
    CompleterItem
} from 'ng2-completer';

import {
    User,
    Position,
    Organization,
    Role
} from 'app/core/models';
import {
    UserService,
    PositionService,
    OrganizationService,
    RoleService
} from 'app/core/services';

import { MatSelect } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'shared-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {

    private user: User;
    private confirmation_password: String;

    private position_search = '';
    private positionCompleterData: CompleterData;
    @ViewChild('positionCompleter') positionCompleter: CompleterCmp;

    private organization_search = '';
    private organizationCompleterData: CompleterData;
    @ViewChild('organizationCompleter') organizationCompleter: CompleterCmp;

    private roles: Role[];
    rolefc = new FormControl();
    @ViewChild('selectroles') selectroles: MatSelect;

    private errors: any = {};
    private has_errors = false;
    private is_processing = false;
    private is_organization_ok = false;

    constructor(
        private userService: UserService,
        private positionService: PositionService,
        private positionCompleterService: CompleterService,
        private organizationCompleterService: CompleterService,
        private organizationService: OrganizationService,
        private roleService: RoleService,
        private _notificationsService: NotificationsService
        ) {
            this.user = new User('', false, '', '', '', '', '', '');
            this.user.gender = 'M';
            this.confirmation_password = '';
            const position = [
                new Position('Researcher'),
                new Position('Physician')
            ];

            this.positionCompleterData = positionCompleterService.local(position, 'name', 'name');
            this.organizationCompleterData = organizationCompleterService.local(
            this.organizationService.getAll(), 'name', 'name');
    }

    ngOnInit() {
        this.roleService.getAll().subscribe(
            roles => {
                console.warn(roles, 'Roles ON service');
                this.roles = roles;
            },
            error => {
                console.log(error);
            }
        );
    }

    onToggleIsActive(input_is_active: boolean) {
        console.log(input_is_active);
        this.user.is_active = input_is_active;
    }

    onToggleGender(input_gender: string) {
        console.log(input_gender);
        this.user.gender = input_gender;
    }

    onSelectOrganization(data: CompleterItem) {
      if (data) {
        if (!this.user.organizations) {
            this.user.organizations = [{
            'organization': -1,
            'position': -1
            }];
        }

        this.user.organizations[0]['organization'] = data.originalObject.id;
        if (this.user.organizations[0]['position'] !== -1) {
            this.is_organization_ok = true;
        }
      } else {
        this.user.organizations[0]['organization'] = -1;
        this.is_organization_ok = false;
      }
    }

    onSelectPosition(data: CompleterItem) {
        if (data) {
            if (!this.user.organizations) {
                this.user.organizations = [{
                'organization': -1,
                'position': -1
                }];
            }
            this.user.organizations[0]['position'] = data.originalObject.id;
            if (this.user.organizations[0]['organization'] !== -1) {
                this.is_organization_ok = true;
            }
        } else {
            this.user.organizations[0]['position'] = -1;
            this.is_organization_ok = false;
        }
    }

    onRolesListChanged(cur_roles: MatSelect) {
        this.user.roles = cur_roles.value.map(item => item);
        console.log(this.user.roles, 'SELECTED');
    }

    onOrganizationSearchClick() {
        if (this.organizationCompleter.isOpen()) {
            this.organizationCompleter.close();
        } else {
            this.organizationCompleter.open();
        }
    }

    onPositionSearchClick() {
        if (this.positionCompleter.isOpen()) {
            this.positionCompleter.close();
        } else {
            this.positionCompleter.open();
        }
    }

    onSaveClick(input_user: User) {
        console.log(input_user);
        this.errors = {};
        this.has_errors = false;
        this.is_processing = true;
        this.userService.create(input_user).subscribe(
            created_user => {
            this.is_processing = false;
            this._notificationsService.success(
                'New User : ' + input_user.username,
                'Successfully Created.',
                {
                    timeOut: 10000,
                    showProgressBar: true,
                    pauseOnHover: false,
                    clickToClose: false,
                });
            },
            errors  => {
            this.errors = errors;
            this.has_errors = true;
            this.is_processing = false;
            });
    }// --onSaveClick
}
