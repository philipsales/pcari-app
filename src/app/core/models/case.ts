import {CaseJSON, FormAnswerJSON} from './../interfaces';
import {FormAnswer} from './formanswer';

export class Case {
  id: string;
  case_nbr: string;
  date_created: Date;
  diagnosis?: string;
  forms?: FormAnswer[];
  is_deleted: boolean;

  static fromJSON(json): Case {
    if (typeof json === 'string') {
        return JSON.parse(json, Case.reviver);
    } else {
        const instance = Object.create(Case.prototype);
        let output = Object.assign(instance, json, {
          id: json._id,
          case_nbr: json.case_number,
          diagnosis: json.diagnosis,
          date_created: new Date(json.date_created),
          is_deleted: json.isDeleted
        });
        console.log(json.forms);
        if (json.forms) {
          output['forms'] = json.forms.map(FormAnswer.fromJSON);
        }
        return output;
    }
  }

  static reviver(key: string, value: any): any {
    return key === '' ? Case.fromJSON(value) : value;
  }

  constructor(case_nbr: string, diagnosis: string, forms: FormAnswer[]) {
      this.case_nbr = case_nbr;
      this.diagnosis = diagnosis;
      this.forms = forms;
      this.is_deleted = false;
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
      diagnosis: this.diagnosis,
      date_created: date_created,
      forms: forms
    });
  }
}
