import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private show_signup = false;
  private show_signin = true;

  constructor() {
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
  }// --onSigninClick
}// --LoginComponent
