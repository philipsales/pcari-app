import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  @Output() confirmedEvent: EventEmitter<boolean> = new EventEmitter();
  private _show: any;
  @Input() set show(value: boolean) {
    if (value) {
      this._show = value;
      console.warn(this._show, 'SHOWING DELETE!');
      $('#modal_form_confirmdelete').modal('show');
    }
  }// -- setter for forms

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(yes: boolean) {
    this.confirmedEvent.emit(yes);
    $('#modal_form_confirmdelete').modal('hide');
  }

}
