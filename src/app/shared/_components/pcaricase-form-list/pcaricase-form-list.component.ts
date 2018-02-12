import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormAnswer } from 'app/core/models';

@Component({
  selector: 'app-pcaricase-form-list',
  templateUrl: './pcaricase-form-list.component.html',
  styleUrls: ['./pcaricase-form-list.component.css']
})
export class PcaricaseFormListComponent implements OnInit {
  @Input() caseid: string;
  @Input() casenumber: string;
  @Input() forms: FormAnswer;
  @Input() method: string;
  @Input() update_url: string;
  @Input() view_url: string;

  private _show: boolean;
  @Input() set show(value: boolean) {
      console.warn(this._show);
      this._show = value;
  }// -- _reinit setter

  @Output() onCallSelectFormTrigger: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddForm() {
    this.onCallSelectFormTrigger.emit();
  }

}
