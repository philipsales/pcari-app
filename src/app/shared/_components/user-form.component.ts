import { Component, OnInit } from '@angular/core';

import { NotificationsService } from 'angular2-notifications';

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
  private errors: any = {};
  private has_errors = false;
  private is_processing = false;

  constructor(private userService: UserService,
	      private _notificationsService: NotificationsService) {		
      this.user = new User('',false, '', '','','','','');
      this.confirmation_password = '';
  }

  ngOnInit() {
  }

  onSaveClick(input_user: User){
      this.errors = {};
      this.has_errors = false;
      this.is_processing = true;
      this.userService.create(input_user).subscribe(
          created_user => {
	      this.is_processing = false;
              console.log(created_user, 'USER CREATED : user-from.component');
	      this._notificationsService.success(
		  'New User : ' + input_user.username,
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
              console.log(errors, 'ERROR : user-form.component');
	      this.errors = errors;
	      this.has_errors = true;
	      this.is_processing = false;
          });
  }//--onSaveClick
}
