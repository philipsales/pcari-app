import { SectionJSON } from './sectionjson';

export interface FormJSON {
    _id?: string;
    id?: string;
    name: string;
    organization: string;
    department: string;
    type: string;
    approval?: string;
    status?: string;
    created_by?: string;
    date_created?: number;
    validity_date?: Date;
    is_deleted?: boolean;
    sections?: SectionJSON[];
}
