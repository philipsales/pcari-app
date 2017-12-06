import { RoleJSON } from '../interfaces';

export class Role {
    name: string;
    description: string;
    is_active: boolean;

    constructor(
      name: string,
      description: string,
      is_active: boolean	
    ) {
      this.name = name;
      this.description = description;
      this.is_active = is_active;
    }

    toJSON(): RoleJSON {
	return Object.assign({}, this, {
	    name: this.name,
	    description: this.description,
	    is_active: this.is_active ? 'True' : 'False'
	});
    }

    static fromJSON(json: RoleJSON): Role {
	if (typeof json === 'string') {
	    return JSON.parse(json, Role.reviver);
	} else {	
	    let role = Object.create(Role.prototype);
	    console.log(json.is_active, 'WWWWWWWWWWWWWWWWWWWWW');
	    return Object.assign(role, json, {
		name: json.name,
		description: json.description,
		is_active: (json.is_active || json.is_active == 'True') ,
	    });
	}
    }

    static reviver(key: string, value: any): any {
	return key === "" ? Role.fromJSON(value) : value;
    }
}
