export class Database {
  id: number;
  name: string;
  isDeleted: string;
  dateCreated: Date;
  createdBy: string;
  description: string;
  startDate: Date;
  dirPath: string;

  constructor(name: string) {
      this.name = name;
  }
}
