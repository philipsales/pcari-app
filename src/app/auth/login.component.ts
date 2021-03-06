import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show_signup = false;
  show_signin = true;
  show_about = false;
  version = '';

  constructor() {
    this.version = environment.VERSION;
  }

  ngOnInit() {
  }// --ngOnInit

  onSignupClick() {
    this.show_signup = true;
    this.show_signin = false;
  }// --onSignupClick

  onSigninClick() {
    this.show_signin = true;
    this.show_signup = false;
    this.show_about = false;
  }// --onSigninClick

  onAboutClick() {
    this.show_about = true;
    this.show_signup = false;
    this.show_signin = false;
  }// --onSignupClick
}// --LoginComponent
