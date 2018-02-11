import { Component, OnInit, Input } from '@angular/core';
import { Form } from 'app/core/models';

@Component({
  selector: 'app-pcariform-list',
  templateUrl: './pcariform-list.component.html',
  styleUrls: ['./pcariform-list.component.css']
})
export class PcariformListComponent implements OnInit {

  @Input() create_url: string;
  @Input() update_url: string;
  private _forms: Form[];
  @Input() set forms(value: Form[]) {
      this._forms = value;
      console.warn('HELLO!');
  }// -- setter for forms

  constructor() { }

  ngOnInit() {
  }

}
