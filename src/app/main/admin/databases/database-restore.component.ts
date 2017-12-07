import { Component, OnInit } from '@angular/core';

import { DatabaseService } from 'app/core/services';
import { Database } from 'app/core/models'; 


@Component({
  selector: 'app-database-restore',
  templateUrl: './database-restore.component.html',
  styleUrls: ['./database-restore.component.css']
})
export class DatabaseRestoreComponent implements OnInit {

  private new_database: Database;
  private errors: any = {};
  private has_errors = false;
  private is_processing = false;

  constructor() { 
     this.new_database = new Database('');
  }

  ngOnInit() {
    this.errors = {};
    this.has_errors = false;
    this.is_processing = true;
  }

}
