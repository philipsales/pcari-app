import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'app/core/services';

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

  constructor(
      private router: Router,
      private authService: AuthService) {
  }

  ngOnInit() {
  }//--ngOnInit

  login() {
    this.loading = true;
    this.authService.login(this.model.username, this.model.password).subscribe(
        result => {
	    console.log(result, 'RESULT');
            if (result['status'] === true) {
		this.router.navigate(['']);
            }  else {
		this.error = 'Username or password is incorrect';
		this.loading = false;
            }
	},
        error => {
            const error_message = JSON.parse(error).message;
            this.error = error_message;
            this.loading = false;
	});
  }//--login

  onUpdatedUserEvent(new_password: string){
  }

  onCancelUpdatedEvent(){
  }
}//--LoginComponent
