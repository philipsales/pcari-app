import { Component, OnInit } from '@angular/core';

import { FormService } from 'app/core/services';
import { Form } from 'app/core/models';

@Component({
  selector: 'app-medforms-list',
  templateUrl: './medforms-list.component.html',
  styleUrls: ['./medforms-list.component.css']
})
export class MedformsListComponent implements OnInit {
  private forms: Form[];

  constructor(private formService: FormService) { 
    this.forms = [];
  }

  ngOnInit() {
    this.formService.getMedicalForms().subscribe(
      forms => {
        this.forms = forms;
        console.log(this.forms, 'FORMS');
      }
    );
  }
}
