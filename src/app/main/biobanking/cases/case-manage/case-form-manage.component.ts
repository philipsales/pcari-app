import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormAnswer } from 'app/core/models';

@Component({
  selector: 'app-case-form-manage',
  templateUrl: './case-form-manage.component.html',
  styleUrls: ['./case-form-manage.component.css']
})
export class CaseFormManageComponent implements OnInit {
  @Input() forms: FormAnswer;
  @Input()  method: string;
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
