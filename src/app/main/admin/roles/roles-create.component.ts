import { Component, OnInit } from '@angular/core';

import { Role }           from 'app/core/models';
import { RoleService }    from 'app/core/services';

@Component({
  selector: 'app-roles-create',
  templateUrl: './roles-create.component.html',
  styleUrls: ['./roles-create.component.css']
})
export class RolesCreateComponent implements OnInit {

  private new_role: Role;
    
  constructor(
      private roleService: RoleService) {
      this.new_role = new Role('','',false);
  }//--constructor

  ngOnInit() {
  }

  onSaveClick(role: Role){
      console.log('HELOOOOOOOOOOOOOOOOOOOOOO');
      this.roleService.create(role).subscribe(
          created_role => {
              console.log(created_role, 'ROLE CREATED : roles-create.component');
          },
          errors  => {
              console.log(errors, 'ERROR : roles-create.component');
          });
  }//--onSaveClick
}
