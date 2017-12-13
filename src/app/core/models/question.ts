export class Question {
  key         : string;
  label       : string;
  type        : string;
  value       : string;
  required    : boolean;
  order       : number;
  options?    : string[];

  constructor(
    key         : string,
    label       : string,
    type        : string,
    value       : string,
    required    : boolean,
    order       : number,	
    options     : string[] 
  ){
    this.key = key;
    this.label = label;
    this.type = type;
    this.value = value;
    this.required = required;
    this.order = order;
    this.options = options;
  }
}
