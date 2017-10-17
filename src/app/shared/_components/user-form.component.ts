import { Component, OnInit, ViewChild } from '@angular/core';

import { NotificationsService } from 'angular2-notifications';
import {
    CompleterCmp,
    CompleterService,
    CompleterData,
    CompleterItem
}  from 'ng2-completer';

import {
    User,
    Position,
    Organization
} from 'app/core/models';
import {
    UserService,
    PositionService,
    OrganizationService
} from 'app/core/services';

@Component({
  selector: 'shared-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  private user: User;
  private confirmation_password : String;
    
  private position_search = '';
  private positionCompleterData: CompleterData;
  @ViewChild('positionCompleter') positionCompleter: CompleterCmp;
    
  private organization_search = '';
  private organizationCompleterData: CompleterData;
  @ViewChild('organizationCompleter') organizationCompleter: CompleterCmp;
    
  private errors: any = {};
  private has_errors = false;
  private is_processing = false;

  constructor(private userService: UserService,
	      private positionService: PositionService,
	      private positionCompleterService: CompleterService,
	      private organizationCompleterService: CompleterService,
	      private organizationService: OrganizationService,
	      private _notificationsService: NotificationsService) {		
      this.user = new User('',false, '', '','','','','');
      this.user.gender = 'M';
      this.confirmation_password = '';

      this.positionCompleterData = positionCompleterService.local(
	  this.positionService.getAll(), 'name','name'
      );
      this.organizationCompleterData = organizationCompleterService.local(
	  this.organizationService.getAll(), 'name','name'
      );
  }

  ngOnInit() {
  }

  onToggleIsActive(input_is_active: boolean){
      console.log(input_is_active);
      this.user.is_active = input_is_active;
  }

  onToggleGender(input_gender: string){
      console.log(input_gender);
      this.user.gender = input_gender;
  }

  onSelectOrganization(data: CompleterItem){
      if (data){
	  console.log(data.originalObject.id);
	  console.log(data.originalObject.name);
      } else {
	  console.log('delete this entry');
      }
  }

  onSelectPosition(data: CompleterItem){
      if (data){
	  console.log(data.originalObject.id);
	  console.log(data.originalObject.name);
      } else {
	  console.log('delete this entry');
      }
  }

  onOrganizationSearchClick(){
      if(this.organizationCompleter.isOpen()) {
	  this.organizationCompleter.close();
      } else {
	  this.organizationCompleter.open();
      }
  }

  onPositionSearchClick(){
      if(this.positionCompleter.isOpen()) {
	  this.positionCompleter.close();
      } else {
	  this.positionCompleter.open();
      }
  }
    
  onSaveClick(input_user: User){
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
		  }
	      )
          },
          errors  => {
	      this.errors = errors;
	      this.has_errors = true;
	      this.is_processing = false;
          });
  }//--onSaveClick
}
