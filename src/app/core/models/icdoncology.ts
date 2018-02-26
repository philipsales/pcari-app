import { IcdoncologyJSON } from '../interfaces';

export class Icdoncology {
  diagnosis_name: string;
  diagnosis_code: string;

  static fromJSON(json: IcdoncologyJSON): Icdoncology {
    if (typeof json === 'string') {
      return JSON.parse(json, Icdoncology.reviver);
    } else {
      const database = Object.create(Icdoncology.prototype);
      return Object.assign(database, json, {
        diagnosis_name: json.diagnosis_name,
        diagnosis_code: json.diagnosis_code,
      });
    }
  }

  static reviver(key: string, value: any): any {
    return key === '' ? Icdoncology.fromJSON(value) : value;
  }

  constructor(
    diagnosis_name: string,
    diagnosis_code: string,
  ) {
    this.diagnosis_name = diagnosis_name;
    this.diagnosis_code = diagnosis_code;
  }

  toJSON(): IcdoncologyJSON {
    return Object.assign({}, this, {
      diagnosis_name: this.diagnosis_name,
      diagnosis_code: this.diagnosis_code,
    });
  }
}
