import { QuestionBase } from './question-base';

export class DropdownQuestion extends QuestionBase<string> {
    controlType = 'dropdown';
    options: {
      key   : string,
      index : number,
      value : string
    }[] = [];

    constructor(
      options: {} = {}
    ) 
    {
      super(options);

      if(options['options']){
        let arrvalue = options['options'].split('|');
        let index = 0;

        for(var curvalue of arrvalue){
          this.options.push({
            key: this.key,
            index: index,
            value: curvalue
        });
	    }

	    console.log(curvalue);

    }
  }//--constructor
}//--DropdownQuestion
