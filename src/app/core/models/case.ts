import {CaseJSON, AnswerJSON} from './../interfaces';
import {Answer} from './../models';

export class Case {
  id: number;
  case_nbr: string;
  is_deleted: boolean;
  answers?: Answer[];
  diagnosis?: string;

  static fromJSON(json: CaseJSON): Case {
    if (typeof json === 'string') {
        return JSON.parse(json, Case.reviver);
    } else {
        const instance = Object.create(Case.prototype);
        return Object.assign(instance, json, {
          case_nbr: json.case_number,
          is_deleted: json.isDeleted,
          answers: json.answers
        });
    }
  }

  static reviver(key: string, value: any): any {
    return key === '' ? Case.fromJSON(value) : value;
  }

  constructor(case_nbr: string, answers: Answer[]) {
      this.case_nbr = case_nbr;
      this.is_deleted = false;
      this.answers = answers;
  }

  toJSON(): CaseJSON {
    let answers : AnswerJSON[] = [];
    if (this.answers) {
      answers = this.answers.map((answer) => answer.toJSON());
    }

    return Object.assign({}, this, {
      case_number: this.case_nbr,
      isDeleted: this.is_deleted,
      answers: answers
    });
  }
}
