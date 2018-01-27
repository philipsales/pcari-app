import { DatabaseJSON } from '../interfaces';

export class Database {
  id: string;
  name: string;
  isDeleted: string;
  dateCreated: Date;
  createdBy: string;
  description: string;
  startDate: Date;
  dirPath: string;

  static fromJSON(json: DatabaseJSON): Database {
    if (typeof json === 'string') {
      return JSON.parse(json, Database.reviver);
    } else {
      const database = Object.create(Database.prototype);
      return Object.assign(database, json, {
        id: json._id,
        name: json.name,
        description: json.description
      });
    }
  }

  static reviver(key: string, value: any): any {
    return key === '' ? Database.fromJSON(value) : value;
  }

  constructor(
    name: string,
    description: string
  ) {
    this.name = name;
    this.description = description;
  }

  toJSON(): DatabaseJSON {
    return Object.assign({}, this, {
      _id: this.id,
      name: this.name,
      description: this.description,
      createdBy: "philip",
      dirPath: this.dirPath
    });
  }
}
