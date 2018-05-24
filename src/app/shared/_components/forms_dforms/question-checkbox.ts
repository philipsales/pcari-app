import { QuestionBase } from './question-base';

export class CheckboxQuestion extends QuestionBase<string> {
    controlType = 'checkbox';
    type : string;
    options: {
      key   : string,
      index : number,
      value : string[]
    }[] = [];

    constructor(
      options: {} = {}
    ) 
    {
      super(options);

        if(options['options']){


          let arrvalue = options['options'];

          arrvalue.forEach((value,index)=> {

            this.options.push({
              key: value.key,
              index: value.index,
              value: value.name 
            });

          });
        this.type = 'checkbox';
      }
    }//--constructor
}//--CheckboxQuestion
