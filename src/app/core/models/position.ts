import { PositionJSON }   from '../interfaces';

export class Position {
    id: number;
    name: string;

    constructor(name: string) {
	this.name = name;
    }

    toJSON(): PositionJSON {
	return Object.assign({}, this, {
	    id: this.id,
	    name: this.name,
	});
    }

    static fromJSON(json: PositionJSON): Position {
	if (typeof json === 'string') {
	    return JSON.parse(json, Position.reviver);
	} else {	
	    let position = Object.create(Position.prototype);
	    return Object.assign(position, json, {
		id: json.id,
		name: json.name,
	    });
	}
    }

    static reviver(key: string, value: any): any {
	return key === "" ? Position.fromJSON(value) : value;
    }
}
