import {AnswerJSON} from './answerjson';

export interface CaseJSON {
    case_number: string;
    answers?: AnswerJSON[];
    isDeleted?: boolean;
}
