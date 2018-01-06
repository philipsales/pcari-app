import { Section } from './section';

export class Form {
  id            : number;
  name          : string;
  department?   : string;
  type?         : string;
  approval?     : string;
  status?       : string;
  created_by?   : string;
  date_created? : Date;
  is_deleted?   : boolean;
  sections?     : Section[];

  constructor(
    name: string
  ) {
      this.name = name;
  }
}
