import { OrganizationJSON }   from '../interfaces';

export class Organization {
    id: number;
    name: string;

    constructor(name: string) {
	this.name = name;
    }

    toJSON(): OrganizationJSON {
	return Object.assign({}, this, {
	    id: this.id,
	    name: this.name,
	});
    }

    static fromJSON(json: OrganizationJSON): Organization {
	if (typeof json === 'string') {
	    return JSON.parse(json, Organization.reviver);
	} else {	
	    let organization = Object.create(Organization.prototype);
	    return Object.assign(organization, json, {
		id: json.id,
		name: json.name,
	    });
	}
    }

    static reviver(key: string, value: any): any {
	return key === "" ? Organization.fromJSON(value) : value;
    }
}
