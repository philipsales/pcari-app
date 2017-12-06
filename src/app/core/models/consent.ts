export class Consent {
  id: number;
  name: string;
  number: string;
  description: string;
  is_deleted: boolean;

  constructor(name: string) {
      this.name = name;
  }
}
