import { Component, OnInit } from '@angular/core';

import { FormService } from 'app/core/services';
import { Form } from 'app/core/models';

@Component({
  selector: 'app-consentforms-list',
  templateUrl: './consentforms-list.component.html',
  styleUrls: ['./consentforms-list.component.css']
})
export class ConsentformsListComponent implements OnInit {

  private forms: Form[];

  constructor(private formService: FormService) {
    this.formService.currentForm = undefined;
    this.forms = [];
  }

  ngOnInit() {
    this.formService.getBiobankForms().subscribe(
      forms => {
        this.forms = forms;
        console.log(this.forms, 'FORMS');
      }
    );
  }

  onDeleteForm(for_delete: Form) {
    console.log(for_delete, 'FORM FOR DELETE');
  }
}
