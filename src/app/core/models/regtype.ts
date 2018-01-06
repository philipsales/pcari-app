export class RegType {
  id            : number;
  name          : string;
  date_created? : Date;
  date_updated? : Date;
  is_deleted    : boolean;

  constructor(name: string) {
      this.name = name;
  }
}
