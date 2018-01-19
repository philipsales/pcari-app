import { Component, OnInit } from '@angular/core';
import {User} from 'app/core/models';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  private roles: string[];

  constructor() { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.roles = user.roles;
    console.warn(this.roles, 'ROLES!!!');
  }

}
