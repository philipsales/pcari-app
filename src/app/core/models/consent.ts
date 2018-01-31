import { Form } from './form';
import { ConsentJSON } from '../interfaces';

export class Consent {
  id: string;
  name: string;
  number: string;
  organization: string;
  dir_path: string;
  description: string;
  created_by: string;
  is_deleted: string;
  validity_date: Date;
  date_created: Date;
  date_updated?: Date;
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
        dir_path: json.dir_path,
        description: json.description,
        validityDate: json.validity_date,
        created_by: json.created_by,
        date_created: json.date_created,
        is_deleted: json.is_deleted,
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
    this.dir_path = dir_path;
    this.description = description;
    this.created_by = created_by;
    this.is_deleted = is_deleted;
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
