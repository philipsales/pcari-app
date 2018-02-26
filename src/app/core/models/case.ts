import { CaseJSON, FormAnswerJSON } from './../interfaces';
import { FormAnswer } from './formanswer';

export class Case {
  id: string;
  case_nbr: string;
  organization: string;
  date_created: Date;
  diagnosis?: string;
  forms?: FormAnswer[];
  is_deleted: boolean;
  created_by?: string;

  static fromJSON(json): Case {
    if (typeof json === 'string') {
      return JSON.parse(json, Case.reviver);
    } else {
      const instance = Object.create(Case.prototype);
      let output = Object.assign(instance, json, {
        id: json._id,
        case_nbr: json.case_number,
        organization: json.organization,
        diagnosis: json.diagnosis,
        date_created: new Date(json.date_created),
        is_deleted: json.isDeleted,
        created_by: json.created_by
      });
      console.log(json.forms);
      if (json.forms) {
        output['forms'] = json.forms.map(FormAnswer.fromJSON);
      } else {
        output['forms'] = [];
      }
      return output;
    }
  }

  static reviver(key: string, value: any): any {
    return key === '' ? Case.fromJSON(value) : value;
  }

  constructor(
    case_nbr: string,
    organization: string,
    diagnosis: string,
    forms: FormAnswer[],
    created_by?: string
  ) {
    this.case_nbr = case_nbr;
    this.organization = organization;
    this.diagnosis = diagnosis;
    this.forms = forms;
    this.is_deleted = false;
    this.created_by = created_by;
  }

  toJSON(): CaseJSON {
    let forms: FormAnswerJSON[] = [];
    let date_created: number = (new Date).getTime();
    if (this.forms) {
      forms = this.forms.map((form) => form.toJSON());
    }
    if (this.date_created) {
      date_created = this.date_created.getTime();
    }

    return Object.assign({}, this, {
      case_number: this.case_nbr,
      organization: this.organization,
      diagnosis: this.diagnosis,
      date_created: date_created,
      created_by: this.created_by,
      forms: forms
    });
  }
}
