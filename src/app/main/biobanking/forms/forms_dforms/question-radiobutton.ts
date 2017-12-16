import { QuestionBase } from './question-base';

export class RadiobuttonQuestion extends QuestionBase<string> {
    controlType = 'checkbox';
    type : string;

    constructor(
	options: {} = {}
    ) {
	super(options);
	this.type = 'checkbox';
    }//--constructor
}//--RadiobuttonQuestion
