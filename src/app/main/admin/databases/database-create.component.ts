import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras, ActivatedRoute, ParamMap } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

import { DatabaseService } from 'app/core/services';
import { Database } from 'app/core/models';
import { Data } from '@angular/router/src/config';

@Component({
  selector: 'app-database-create',
  templateUrl: './database-create.component.html',
  styleUrls: ['./database-create.component.css']
})
export class DatabaseCreateComponent implements OnInit {

  private databaseId: string;

  private existing_database: Database;
  private new_database: Database;
  private errors: any = {};
  private has_errors = false;
  private is_processing = false;

  constructor(private _notificationsService: NotificationsService,
    private databaseService: DatabaseService,
    private route: ActivatedRoute,
    private router: Router) {

    this.new_database = new Database('', '');
  }

  ngOnInit() {
    this.errors = {};
    this.has_errors = false;
    this.is_processing = false;

    this.databaseId = this.route.snapshot.paramMap.get('id');
    console.log(this.databaseId);

    if (this.databaseId) {
      this.databaseService
        .getDatabase(this.databaseId)
        .subscribe(
        database => {
          //this.existing_database = database;
          this.new_database = database;
          console.log('SERVICE: ', this.existing_database);
        }
        );
      //this.new_database = this.existing_database;
      //this.new_database = new Database('', '');
      console.log('NEW: ', this.new_database);
    }
    else {
      this.new_database = new Database('', '');
    };
  }

  onSaveClick(input_database: Database) {
    console.log(input_database);
  }
}
