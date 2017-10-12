import { Component, OnInit } from '@angular/core';

import { UserService } from 'app/core/services';
import { User } from 'app/core/models';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  private users : User[];
    
  constructor(private userService: UserService) {
  }//--constructor

  ngOnInit() {
      this.userService.getAll().subscribe(users => {
	  this.users = users;
	  console.warn(users);
      });
  }//--OnInit

}
