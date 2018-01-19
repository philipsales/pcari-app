import { PermissionJSON } from '../interfaces';

export class Permission {
    id: string;
    perm_code: string;
    module: string;
    application: string;
    description: string;

    constructor(
        perm_code: string,
        input_module: string,
        application: string,
        description?: string
    ) {
        this.perm_code = perm_code;
        this.module = input_module;
        this.application = application;
        this.description = description;
    }


    static fromJSON(json: PermissionJSON): Permission {
        if (typeof json === 'string') {
            return JSON.parse(json, Permission.reviver);
        } else {
            const permission = Object.create(Permission.prototype);
            return Object.assign(permission, json, {
                id: json._id,
                perm_code: json.perm_code,
                module: json.module,
                application: json.application,
                description: json.description
            });
        }
    }

    static reviver(key: string, value: any): any {
        return key === '' ? Permission.fromJSON(value) : value;
    }

    toJSON(): PermissionJSON {
        return Object.assign({}, this, {
            _id: this.id,
            perm_code: this.perm_code,
            module: this.module,
            application: this.application,
            description: this.description
        });
    }
}
