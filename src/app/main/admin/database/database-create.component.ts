import { Component, OnInit } from '@angular/core';

import { NotificationsService } from 'angular2-notifications';

import { DatabaseService } from 'app/core/services';
import { Database } from 'app/core/models'; 

@Component({
  selector: 'app-database-create',
  templateUrl: './database-create.component.html',
  styleUrls: ['./database-create.component.css']
})
export class DatabaseCreateComponent implements OnInit {

  private new_database: Database;
  private errors: any = {};
  private has_errors = false;
  private is_processing = false;

  constructor(private _notificationsService: NotificationsService) { 
     this.new_database = new Database('');
  }

  ngOnInit() {
    this.errors = {};
    this.has_errors = false;
    this.is_processing = true;
  }

}
