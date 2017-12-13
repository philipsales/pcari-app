import { Question } from './question';

export class Section {
  key         : string;
  name        : string;
  order?      : number;
  questions:  Question[];
}
