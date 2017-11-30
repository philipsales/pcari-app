import { QuestionBase } from './question-base';

export class DropdownQuestion extends QuestionBase<string> {
    controlType = 'dropdown';
    options: {
	key   : string,
	value : string
    }[] = [];

    constructor(
	options: {} = {}
    ) {
	super(options);
	if(this.value){
	    let arrvalue = this.value.split('|');
	    for(var curvalue of arrvalue){
		this.options.push({
		    key: this.key,
		    value: curvalue
		});
	    }
	    console.log(curvalue);
	}
    }//--constructor
}//--DropdownQuestion
