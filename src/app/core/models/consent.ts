import { Form } from './form';
import { ConsentJSON } from '../interfaces';

export class Consent {
  id: string;
  name: string;
  number: string;
  organization: string;
  dirPath: string;
  description: string;
  createdBy: string;
  isDeleted: string;
  validityDate: Date;
  dateCreated: Date;
  dateUpdated?: Date;
  forms?: Form[];

  static fromJSON(json: ConsentJSON): Consent {
    if (typeof json === 'string') {
      return JSON.parse(json, Consent.reviver);
    } else {
      const consent = Object.create(Consent.prototype);
      console.log('formJSON: ===', consent);
      return Object.assign(consent, json, {
        id: json._id,
        name: json.name,
        number: json.number,
        organization: json.organization,
        dirPath: json.dirPath,
        description: json.description,
        validityDate: json.validityDate,
        createdBy: json.createdBy,
        dateCreated: json.dateCreated,
        isDeleted: json.isDeleted,
        forms: json.forms
      });
    }
  }

  static reviver(key: string, value: any): any {
    return key === '' ? Consent.fromJSON(value) : value;
  }

  constructor(
    name: string,
    number: string,
    organization: string,
    dir_path: string,
    description: string,
    created_by: string,
    is_deleted: string,
    forms?: Form[],
  ) {
    this.name = name;
    this.number = number;
    this.organization = organization;
    this.dirPath = dir_path;
    this.description = description;
    this.createdBy = created_by;
    this.isDeleted = is_deleted;
    this.forms = forms;
  }

  toJSON(): ConsentJSON {
    let forms;
    if (this.forms) {
      forms = this.forms.map((forms) => forms.toJSON());
    }
    return Object.assign({}, this, {
      _id: this.id,
      name: this.name,
      organization: this.organization,
      forms: forms
    });
  }
}
