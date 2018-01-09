import { Option } from './option';
import { QuestionJSON } from '../interfaces';

export class Question {
  key: string;
  label: string;
  type: string;
  value: string;
  required: boolean;
  order?: number;
  options?: Option[];
  medical_library?: string;
  medical_library_version?: string;
  medical_code?: string;
  medical_name?: string;
  medical_shortname?: string;
  medical_description?: string;

  static fromJSON(json: QuestionJSON): Question {
    if (typeof json === 'string') {
        return JSON.parse(json, Question.reviver);
    } else {
        const question = Object.create(Question.prototype);
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
    return key === '' ? Question.fromJSON(value) : value;
  }

  constructor(
    key: string,
    label: string,
    type: string,
    value: string,
    required: boolean,
    order: number,
    options: Option[]
  ) {
    this.key = key;
    this.label = label;
    this.type = type;
    this.value = value;
    this.required = required;
    this.order = order;
    this.options = options;
  }
}

