import { Section } from './section';
import { FormJSON } from './../interfaces';


export class Form {
  id: number;
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
        const section = Object.create(Section.prototype);
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
    name: string
  ) {
      this.name = name;
  }
}
