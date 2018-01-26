import {AnswerJSON} from './answerjson';

export interface FormAnswerJSON {
    form_id: string;
    form_name: string;
    date_created: number;
    answers: AnswerJSON[];
}
