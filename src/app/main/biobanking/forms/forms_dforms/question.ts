import { QuestionJSON } from 'app/core/interfaces';

export class Question {
    key         : string;
    label       : string;
    type        : string;
    value       : string;
    required    : boolean;
    order       : number;
    options?     : string;

    constructor(
      key         : string,
      label       : string,
      type        : string,
      value       : string,
      required    : boolean,
      order       : number,
      options     : string
    ) {
      this.key = key;
      this.label = label;
      this.type = type;
      this.value = value;
      this.required = required;
      this.order = order;
      this.options = options;
    }

    toJSON(): QuestionJSON {
      return Object.assign({}, this, {
          key: this.key,
          label: this.label,
          type: this.type,
          value: this.value,
          required: this.required,
          order: this.order,
          options: this.options
      });
    }

    static fromJSON(json: QuestionJSON): Question {
      if (typeof json === 'string') {
          return JSON.parse(json, Question.reviver);
      } 
      else {	
        let question = Object.create(Question.prototype);

        let options = [];

          if(json.type == 'dropdown'){
            //options = json.value.split('|');
            options = json.options.split('|');
            console.warn(options, 'optionssssssssssssss');
          }
        
          return Object.assign(question, json, {
            key: json.key,
            label: json.label,
            type: json.type,
            value: json.value,
            required: json.required,
            order: json.order,
            options: json.options
          });
      }
    }

    static reviver(key: string, value: any): any {
      return key === "" ? Question.fromJSON(value) : value;
    }
}
