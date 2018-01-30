import { FormJSON } from "./formjson";

export interface ConsentJSON {
    _id: string;
    name: string;
    number: string;
    organization: string;
    dirPath: string;
    description: string;
    createdBy: string;
    isDeleted: string;
    validityDate?: Date;
    dateCreated?: Date;
    dateUpdated?: Date;
    forms?: FormJSON[];
}
