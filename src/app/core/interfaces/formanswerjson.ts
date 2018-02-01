import {AnswerJSON} from './answerjson';

export interface FormAnswerJSON {
    _id: string;
    form_id: string;
    form_name: string;
    date_created: number;
    answers: AnswerJSON[];
}
