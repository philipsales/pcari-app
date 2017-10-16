import { Component, OnInit } from '@angular/core';

import { NotificationsService } from 'angular2-notifications';

import { Role }           from 'app/core/models';
import { RoleService }    from 'app/core/services';

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
    
  constructor(private roleService: RoleService,
	      private _notificationsService: NotificationsService) {
      this.new_role = new Role('','',false);
  }//--constructor

  ngOnInit() {
  }


  onToggleIsActive(input_is_active: boolean){
      this.new_role.is_active = input_is_active;
  }
    
  onSaveClick(role: Role){
      this.errors = {};
      this.has_errors = false;
      this.is_processing = true;
      this.roleService.create(role).subscribe(
          created_role => {
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
	      )
          },
          errors  => {
              console.log(errors, 'ERROR : roles-create.component');
	      this.errors = errors;
	      this.has_errors = true;
	      this.is_processing = false;
          });
  }//--onSaveClick
}
