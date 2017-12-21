import { Question } from './question';

export class Section {
  key         : string;
  name        : string;
  order?      : number;
  questions?  : Question[];

  constructor(
    key         : string,
    name        : string,
    order?      : number,
    questions?  : Question[]
  ){
    this.key = key;
    this.name = name;
    this.order = order;
    this.questions = questions;
  }

}
