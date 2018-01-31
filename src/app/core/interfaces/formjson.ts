import { SectionJSON } from './sectionjson';

export interface FormJSON {
    _id: string;
    name: string;
    organization: string;
    department: string;
    type: string;
    approval?: string;
    status?: string;
    created_by?: string;
    date_created?: number;
    is_deleted?: boolean;
    sections?: SectionJSON[];
}
