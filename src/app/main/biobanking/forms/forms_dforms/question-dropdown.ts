import { QuestionBase } from './question-base';

export class DropdownQuestion extends QuestionBase<string> {
    controlType = 'dropdown';
    type : string;
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
      console.warn('--DROPDOWN-ts--', options);

        if(options['options']){

          //let arrvalue = options['options'].split('|');
          //let arrvalue_test = ["male","vaginismi"];

          let arrvalue = options['options'];

          arrvalue.forEach((value,index)=> {

            this.options.push({
              key: value.key,
              index: value.index,
              value: value.name 
            });

          });
        this.type = 'dropdown';
      }
    }//--constructor
}//--DropdownQuestion
