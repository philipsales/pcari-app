import { RoleJSON } from '../interfaces';

export class Role {
    name: string;
    description: string;
    isActive: boolean;


    static fromJSON(json: RoleJSON): Role {
        if (typeof json === 'string') {
            return JSON.parse(json, Role.reviver);
        } else {
            const role = Object.create(Role.prototype);
            console.log(json.isActive, 'WWWWWWWWWWWWWWWWWWWWW');
            return Object.assign(role, json, {
                name: json.rolename,
                description: json.description,
                isActive: json.isActive,
            });
        }
    }

    static reviver(key: string, value: any): any {
        return key === '' ? Role.fromJSON(value) : value;
    }

    constructor(
      name: string,
      description: string,
      isActive: boolean
    ) {
      this.name = name;
      this.description = description;
      this.isActive = isActive;
    }

    toJSON(): RoleJSON {
        return Object.assign({}, this, {
            rolename: this.name,
            description: this.description,
            isActive: this.isActive
        });
    }
}
