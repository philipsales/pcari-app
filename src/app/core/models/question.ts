import { Option } from './option';

export class Question {
  key                : string;
  label              : string;
  type               : string;
  value              : string;
  required           : boolean;
  order?             : number;
  options?                 : Option[];
  medical_library?         : string;
  medical_library_version? : string;
  medical_code?            : string;
  medical_name?            : string;
  medical_shortname?       : string;
  medical_description?     : string;

  constructor(
    key         : string,
    label       : string,
    type        : string,
    value       : string,
    required    : boolean,
    order       : number,	
    options     : Option[] 
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

