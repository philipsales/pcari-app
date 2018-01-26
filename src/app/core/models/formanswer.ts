import {Answer} from './answer';
import { FormAnswerJSON } from './../interfaces';


export class FormAnswer {
  form_id: string;
  form_name: string;
  date_created: Date;
  answers: Answer[];

  static fromJSON(json): FormAnswer {
    if (typeof json === 'string') {
        return JSON.parse(json, FormAnswer.reviver);
    } else {
        const section = Object.create(FormAnswer.prototype);
        let output = Object.assign(section, json, {
          form_id: json.form_id,
          form_name: json.form_name,
          date_created: new Date(json.date_created)
        });

        if (json.answers) {
          output['answers'] =  Answer.fromJSON(json.answers);
        }

        return output;
    }
  }

  static reviver(key: string, value: any): any {
    return key === '' ? FormAnswer.fromJSON(value) : value;
  }

  constructor(
    form_id: string,
    form_name: string,
    answers: Answer[]
  ) {
      this.form_id = form_id;
      this.form_name = form_name;
      this.date_created = new Date();
      if (answers) {
        this.answers = answers;
      }
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
      answers: answers
    });
  }
}