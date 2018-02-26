import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-icdoncology-manage',
  templateUrl: './icdoncology-manage.component.html',
  styleUrls: ['./icdoncology-manage.component.css']
})
export class IcdoncologyManageComponent implements OnInit {

  @Output() onHideICDTrigger: EventEmitter<any> = new EventEmitter();
  @Output() onSelectDiagnosisTrigger: EventEmitter<any> = new EventEmitter();

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.location.back();
  }

  onHideICD() {
    this.onHideICDTrigger.emit();
  }

  onSelectDiagnosis(selected) {
    this.onSelectDiagnosisTrigger.emit(selected);
  }

}
