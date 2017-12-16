//builtin
import { Injectable }   from '@angular/core';
import {
    FormControl,
    FormGroup,
    Validators
}                       from '@angular/forms';

//custom
import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
    constructor() { }//--constructor

    toFormGroup(
	questions: QuestionBase<any>[]
    ) {
	let group: any = {};

	questions.forEach(question => {
	    group[question.key] = question.required ? new FormControl(question.value || '', Validators.required) : new FormControl(question.value || '');
	});
	return new FormGroup(group);
    }//--toFormGroup
}//--QuestionControlService
