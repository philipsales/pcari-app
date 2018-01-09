import { Question } from './question';
import { SectionJSON } from './../interfaces';

export class Section {
  key: string;
  name: string;
  order?: number;
  questions?: Question[];

  static fromJSON(json: SectionJSON): Section {
    if (typeof json === 'string') {
        return JSON.parse(json, Section.reviver);
    } else {
        const section = Object.create(Section.prototype);
        return Object.assign(section, json, {
          key: json.key,
          name: json.name,
          order: json.order,
          questions: json.questions
        });
    }
  }

  static reviver(key: string, value: any): any {
    return key === '' ? Section.fromJSON(value) : value;
  }

  constructor(
    key: string,
    name: string,
    order?: number,
    questions?: Question[]
  ) {
    this.key = key;
    this.name = name;
    this.order = order;
    this.questions = questions;
  }
}
