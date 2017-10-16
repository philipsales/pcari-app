import { Component, OnInit } from '@angular/core';

import { User }           from 'app/core/models';
import { UserService }    from 'app/core/services';

@Component({
  selector: 'shared-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  private user: User;
  private confirmation_password : String;
    
  constructor(private userService: UserService) {
      this.user = new User('',false, '', '','','','','');
      this.confirmation_password = '';
  }

  ngOnInit() {
  }

  onSaveClick(input_user: User){
      console.log('HELOOOOOOOOOOOOOOOOOOOOOO');
      this.userService.create(input_user).subscribe(
          created_user => {
              console.log(created_user, 'ROLE CREATED : user-form.component');
          },
          errors  => {
              console.log(errors, 'ERROR : user-form.component');
          });
  }//--onSaveClick
}
