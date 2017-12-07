export class Case {
  id: number;
  case_nbr: string;
  diagnosis: string;
  is_deleted: boolean;

  constructor(case_nbr: string) {
      this.case_nbr = case_nbr;
  }
}
