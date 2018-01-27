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

  private database: Database;

  private errors: any = {};
  private has_errors = false;
  private is_processing = false;

  private state_view: string;
  private view: string;
  private is_restore: boolean;

  constructor(
    private _notificationsService: NotificationsService,
    private databaseService: DatabaseService,
    private route: ActivatedRoute,
    private router: Router) {

    this.database = new Database('', '');
  }

  ngOnInit() {
    this.errors = {};
    this.has_errors = false;
    this.is_processing = false;
    this.is_restore = false;

    this.databaseId = this.route.snapshot.paramMap.get('id');
    const view = this.route.snapshot.url[0].path;

    if (view === 'update') {
      this.updateDatabase();
    }
    else if (view == 'create') {
      this.saveDatabase();
    }
    else {
      this.viewDatabase();
    }

  }

  updateDatabase() {
    this.state_view = 'update';
    this.getDatabase();
  }

  viewDatabase() {
    this.state_view = 'view';
    this.getDatabase();
  }

  saveDatabase() {
    this.state_view = 'create';
  }


  getDatabase() {
    this.databaseService
      .getDatabase(this.databaseId)
      .subscribe(
      database => {
        this.database = database;
      });
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
    this.database = new Database('', '');
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
