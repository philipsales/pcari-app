import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras, ActivatedRoute, ParamMap } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

import { DatabaseService } from 'app/core/services';
import { Database } from 'app/core/models';
import { DatabaseJSON } from 'app/core/interfaces';
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
  private state_view: string;

  constructor(
    private _notificationsService: NotificationsService,
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

    if (this.databaseId) {
      this.updateDatabase();
    }
    else {
      this.saveDatabase();
    };
  }

  updateDatabase() {
    this.state_view = 'Update';
    this.databaseService
      .getDatabase(this.databaseId)
      .subscribe(
      database => {
        this.new_database = database;
      });
  }

  saveDatabase() {
    this.state_view = 'Save';
  }

  onSaveClick(input_database: Database) {
    this.is_processing = true;

    this.databaseService
      .create(input_database)
      .subscribe(
      saved_database => {
        this.notificationPrompt(saved_database);
      });
  }

  onUpdateClick(input_database: Database) {
    this.databaseService
      .update(this.databaseId, input_database)
      .subscribe(
      updated_database => {
        this.notificationPrompt(updated_database);
      });
  }

  onResetClick() {
    this.is_processing = false;
    this.new_database = new Database('', '');
  }

  onRestoreClick(id) {
    console.log(id);
    this.databaseService
      .restore(id)
      .subscribe(
      restored_database => {
        this.notificationPrompt(restored_database);
      });
  }

  notificationPrompt(input_database) {
    this._notificationsService
      .success(
      'Database: ' + input_database.name,
      this.state_view + ' Success',
      {
        timeOut: 10000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: false
      })
  }

}
