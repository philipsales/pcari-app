import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  show_reset = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }//--ngOnInit

  login() {

  }//--login

  onUpdatedUserEvent(new_password: string){
  }

  onCancelUpdatedEvent(){
  }
}//--LoginComponent
