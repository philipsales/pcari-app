import { QuestionBase } from './question-base';

export class RadiobuttonQuestion extends QuestionBase<string> {
    controlType = 'radiobutton';
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
	    }

      this.type = 'radiobutton';


    }//--constructor
}//--
