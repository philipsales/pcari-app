import { Answer } from './answer';
import { FormAnswerJSON } from './../interfaces';


export class FormAnswer {
  id: string;
  form_id: string;
  form_name: string;
  date_created: Date;
  status: boolean;
  answers: Answer[];
  created_by?: string

  static fromJSON(json): FormAnswer {
    if (typeof json === 'string') {
      return JSON.parse(json, FormAnswer.reviver);
    } else {
      const section = Object.create(FormAnswer.prototype);
      let output = Object.assign(section, json, {
        id: json._id,
        form_id: json.form_id,
        form_name: json.form_name,
        status: json.status,
        date_created: new Date(json.date_created),
        created_by: json.created_by
      });

      if (json.answers) {
        output['answers'] = json.answers.map(Answer.fromJSON);
      }

      return output;
    }
  }

  static reviver(key: string, value: any): any {
    console.warn('yi');
    return key === '' ? FormAnswer.fromJSON(value) : value;
  }

  constructor(
    form_id: string,
    form_name: string,
    status: boolean,
    answers: Answer[],
    created_by?: string
  ) {
    this.form_id = form_id;
    this.form_name = form_name;
    this.status = status;
    this.date_created = new Date();
    if (answers) {
      this.answers = answers;
    }
    this.created_by = created_by;
  }

  toJSON(): FormAnswerJSON {
    let date_created;
    let answers;
    if (this.date_created) {
      date_created = this.date_created.getTime();
    }
    if (this.answers) {
      answers = this.answers.map((answer) => answer.toJSON());
    }
    return Object.assign({}, this, {
      form_id: this.form_id,
      form_name: this.form_name,
      date_created: date_created,
      answers: answers,
      created_by: this.created_by
    });
  }
}
