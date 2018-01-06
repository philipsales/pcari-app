import { Component, OnInit } from '@angular/core';

import { FormService } from 'app/core/services';
import { Form }        from 'app/core/models';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {

  private forms: Form[];

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.formService
        .getForms()
        .subscribe(
          forms => {
            this.forms = forms;
          }
        );
  }

  

}
