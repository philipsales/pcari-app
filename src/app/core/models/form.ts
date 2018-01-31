import { Section } from './section';
import { FormJSON } from './../interfaces';

export class Form {
  id: string;
  name: string;
  organization: string;
  department: string;
  type: string;
  approval?: string;
  status?: string;
  created_by?: string;
  date_created?: Date;
  is_deleted?: boolean;
  sections?: Section[];

  static fromJSON(json: FormJSON): Form {
    if (typeof json === 'string') {
      return JSON.parse(json, Form.reviver);
    } else {
      const section = Object.create(Form.prototype);
      return Object.assign(section, json, {
        id: json._id,
        name: json.name,
        organization: json.organization,
        department: json.department,
        type: json.type,
        approval: json.approval,
        status: json.status,
        created_by: json.created_by,
        date_created: new Date(json.date_created),
        is_deleted: json.is_deleted,
        sections: json.sections
      });
    }
  }

  static reviver(key: string, value: any): any {
    return key === '' ? Form.fromJSON(value) : value;
  }

  constructor(
    name: string,
    organization: string,
    department: string,
    type: string,
    sections?: Section[],
    date_created?: Date
  ) {
    this.name = name;
    this.organization = organization;
    this.department = department;
    this.type = type;
    if (sections) {
      this.sections = sections;
    }
    this.date_created = date_created;
  }

  toJSON(): FormJSON {
    let date_created;
    let sections;
    if (this.date_created) {
      date_created = this.date_created.getTime();
    }
    if (this.sections) {
      sections = this.sections.map((section) => section.toJSON());
    }
    return Object.assign({}, this, {

      _id: this.id,
      name: this.name,
      organization: this.organization,
      department: this.department,
      type: this.type,
      approval: this.approval,
      status: this.status,
      created_by: this.created_by,
      date_created: date_created,
      is_deleted: this.is_deleted,
      sections: sections
    });
  }
}
