import { Component, OnInit, ViewChild, Input } from '@angular/core';

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

import { MatSelectionList } from '@angular/material';
import { FormControl } from '@angular/forms';
import { UserJSON } from 'app/core/interfaces';

@Component({
  selector: 'shared-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {

    private _resetuser: UserJSON;
    private _user: User;
    @Input() set user(value: User) {
        this._user = value;
        this._resetuser = this._user.toJSON();
        console.warn('HELLO!');
    }// -- _reinit setter

    @Input() method: string;

    private confirmation_password: String;

    private position_search = '';
    private positionCompleterData: CompleterData;
    @ViewChild('positionCompleter') positionCompleter: CompleterCmp;

    private organization_search = '';
    private organizationCompleterData: CompleterData;
    @ViewChild('organizationCompleter') organizationCompleter: CompleterCmp;

    private roles: Role[];
    @ViewChild('sel_roles') sel_roles: MatSelectionList;

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
            this._user = new User('', false, '', '', '', '', '', '');
            this._user.gender = 'M';
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
        this._user.is_active = input_is_active;
    }

    onToggleGender(input_gender: string) {
        console.log(input_gender);
        this._user.gender = input_gender;
    }

    onSelectOrganization(data: CompleterItem) {
      if (data) {
        if (!this._user.organizations) {
            this._user.organizations = [{
            'organization': -1,
            'position': -1
            }];
        }

        this._user.organizations[0]['organization'] = data.originalObject.id;
        if (this._user.organizations[0]['position'] !== -1) {
            this.is_organization_ok = true;
        }
      } else {
        this._user.organizations[0]['organization'] = -1;
        this.is_organization_ok = false;
      }
    }

    onSelectPosition(data: CompleterItem) {
        if (data) {
            if (!this._user.organizations) {
                this._user.organizations = [{
                'organization': -1,
                'position': -1
                }];
            }
            this._user.organizations[0]['position'] = data.originalObject.id;
            if (this._user.organizations[0]['organization'] !== -1) {
                this.is_organization_ok = true;
            }
        } else {
            this._user.organizations[0]['position'] = -1;
            this.is_organization_ok = false;
        }
    }

    onRolesListChanged(cur_roles: MatSelectionList) {
        this._user.roles = this.sel_roles.selectedOptions.selected.map(item => item.value);
        console.log(this._user.roles, 'SELECTED');
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

    onResetUserClick() {
        this._user = User.fromJSON(this._resetuser);
    }

    onSaveClick(input_user: User) {
        console.log(input_user);
        if (this.method === 'CREATE') {
            this.createUser(input_user);
        } else if (this.method === 'UPDATE') {
            this.updateUser(input_user);
        }
    }// --onSaveClick

    createUser(input_user: User) {
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
    }

    updateUser(input_user: User) {
        this.errors = {};
        this.has_errors = false;
        this.is_processing = true;
        this.userService.update(input_user).subscribe(
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
    }
}
