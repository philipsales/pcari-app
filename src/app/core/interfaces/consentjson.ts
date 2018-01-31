import { FormJSON } from "./formjson";

export interface ConsentJSON {
    _id: string;
    name: string;
    number: string;
    organization: string;
    dir_path: string;
    description: string;
    created_by: string;
    is_deleted: string;
    validity_date?: Date;
    date_created?: Date;
    date_updated?: Date;
    forms?: FormJSON[];
}
