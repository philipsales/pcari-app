import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account-menu',
  templateUrl: './my-account-menu.component.html',
  styleUrls: ['./my-account-menu.component.css']
})
export class MyAccountMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    console.log('On logout');
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
