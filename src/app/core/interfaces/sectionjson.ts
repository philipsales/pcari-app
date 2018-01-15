import {QuestionJSON} from './questionjson';

export interface SectionJSON {
    key: string;
    name: string;
    order?: number;
    questions?: QuestionJSON[];
}
