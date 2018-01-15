import {AnswerJSON} from './../interfaces';

export class Answer {
    key: string;
    answer: string;

  static fromJSON(json: AnswerJSON): Answer {
    if (typeof json === 'string') {
        return JSON.parse(json, Answer.reviver);
    } else {
        const instance = Object.create(Answer.prototype);
        return Object.assign(instance, json, {
          key: json.question_key,
          answer: json.question_answer
        });
    }
  }

  static reviver(key: string, value: any): any {
    return key === '' ? Answer.fromJSON(value) : value;
  }

  constructor(key: string, answer: string) {
      this.key = key;
      this.answer = answer;
  }

  toJSON(): AnswerJSON {
    return Object.assign({}, this, {
      question_key: this.key,
      question_answer: this.answer
    });
  }
}
