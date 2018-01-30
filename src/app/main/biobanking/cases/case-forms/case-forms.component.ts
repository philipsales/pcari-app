import { Component, OnInit } from '@angular/core';
import { Form } from 'app/core/models';
import { ActivatedRoute } from '@angular/router';
import { FormService } from 'app/core/services';
import { NoJWTError } from 'app/core/errors';

@Component({
  selector: 'app-case-forms',
  templateUrl: './case-forms.component.html',
  styleUrls: ['./case-forms.component.css']
})
export class CaseFormsComponent implements OnInit {

  private data: Form;
  private caseid = '';
  private formid = '';

  constructor(
    private route: ActivatedRoute,
    private formService: FormService
  ) {
    this.data = new Form('', '', '', '');
  }

  ngOnInit() {
    this.caseid = this.route.snapshot.paramMap.get('id');
    this.formid = this.route.snapshot.paramMap.get('formid');
    console.log('PREVIEW', this.caseid);
    console.log('PREVIEW', this.formid);
    this.formid = '5a707e0de356d86c2c579012';
    this.formService.getForm(this.formid).subscribe((response: Form) => {
      delete this.data;
      this.data = response;
      console.log(response, 'nakuhang form');
    }, error => {
      console.log(error); // get the error in error handler
      if (error instanceof NoJWTError) {
        console.warn('TO DO : handle JWT Expired');
      }
    });
  }

}
