import { RoleJSON } from '../interfaces';

export class Role {
    id?: string;
    name: string;
    description: string;
    isActive: boolean;
    permissions?: string[];

    static fromJSON(json: RoleJSON): Role {
        if (typeof json === 'string') {
            return JSON.parse(json, Role.reviver);
        } else {
            const role = Object.create(Role.prototype);
            console.log(role, 'WWWWWWWWWWWWWWWWWWWWW');
            console.log(json.isActive, 'WWWWWWWWWWWWWWWWWWWWW');

            const output = Object.assign(role, json, {
                id: json._id,
                name: json.rolename,
                description: json.description,
                permissions: json.permissions,
                isActive: json.isActive,
            });
            console.log(output);
            return output;
        }
    }

    static reviver(key: string, value: any): any {
        return key === '' ? Role.fromJSON(value) : value;
    }

    constructor(
      name: string,
      description: string,
      isActive: boolean,
      permissions?: string[]
    ) {
      this.name = name;
      this.description = description;
      this.isActive = isActive;
      this.permissions = permissions;
    }

    toJSON(): RoleJSON {
        return Object.assign({}, this, {
            rolename: this.name,
            description: this.description,
            isActive: this.isActive,
            permissions: this.permissions
        });
    }
}
