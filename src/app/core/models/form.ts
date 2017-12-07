export class Form {
  id: number;
  name: string;
  department: string;
  status: string;
  created_by: string;
  is_deleted: boolean;

  constructor(
    name: string
  ) {
      this.name = name;
  }
}
