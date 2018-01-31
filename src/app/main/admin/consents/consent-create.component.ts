import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras, ActivatedRoute, ParamMap } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-consent-create',
  templateUrl: './consent-create.component.html',
  styleUrls: ['./consent-create.component.css']
})
export class ConsentCreateComponent implements OnInit {

  constructor(
    private _notificationsService: NotificationsService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
  }
}
