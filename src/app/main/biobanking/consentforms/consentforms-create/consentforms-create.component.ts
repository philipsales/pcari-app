import { Component, OnInit } from '@angular/core';
import { Form, Section } from 'app/core/models';

import { KeyGenerator } from 'app/core/utils';

@Component({
  selector: 'app-consentforms-create',
  templateUrl: './consentforms-create.component.html',
  styleUrls: ['./consentforms-create.component.css']
})
export class ConsentformsCreateComponent implements OnInit {

  private new_form: Form;

  constructor(private keyGenerator: KeyGenerator) {
    this.new_form = new Form(
      '',
      '',
      '',
      '',
      '',
      [
        new Section(
        this.keyGenerator.create(),
        'Untitled section',
        0,
        [])
      ]
    );
  }

  ngOnInit() {
  }

}
