import { Component, OnInit } from '@angular/core';

import { FormService } from 'app/core/services';
import { Form }        from 'app/core/models';

@Component({
  selector: 'app-form-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit {

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
