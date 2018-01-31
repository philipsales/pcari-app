import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

import { FormService } from 'app/core/services';
import { Form } from 'app/core/models';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-consent-form-add',
  templateUrl: './consent-form-add.component.html',
  styleUrls: ['./consent-form-add.component.css']
})
export class ConsentFormAddComponent implements OnInit {


  private forms: Form[];
  private _show: boolean;
  @Input() set show(value: boolean) {
    console.warn(this._show);
    this._show = value;
  }// -- _reinit setter
  private selection: SelectionModel<Form>;

  displayedColumns = ['select', 'name', 'type', 'organization'];
  dataSource: MatTableDataSource<Form>;
  initialSelection = [];
  allowMultiSelect = true;

  @Output() onSaveFormAddTrigger: EventEmitter<Form[]> = new EventEmitter();
  @Output() onCancelFormAddTrigger: EventEmitter<null> = new EventEmitter();

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.formService
      .getForms()
      .subscribe(
      forms => {
        this.forms = forms;
        this.dataSource = new MatTableDataSource(this.forms);
        this.selection = new SelectionModel<Form>(this.allowMultiSelect, this.initialSelection);
      }
      );
  }

  onAddSelectedForm() {
    this.onSaveFormAddTrigger.emit(this.selection.selected);
  }

  onCancelAddForm() {
    this.onCancelFormAddTrigger.emit();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
