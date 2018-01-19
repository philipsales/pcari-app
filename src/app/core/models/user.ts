import { UserJSON } from '../interfaces';

export class User {
    username: string;
    password: string;
    is_active: boolean;
    first_name: string;
    last_name: string;
    middle_name: string;
    gender: string;
    email: string;
    mobile_number: string;
    verification_status: string;
    roles: string[];
    organizations: { organization: number, position: number }[];


    static fromJSON(json: UserJSON): User {
        if (typeof json === 'string') {
            return JSON.parse(json, User.reviver);
        } else {
            const user = Object.create(User.prototype);
            return Object.assign(user, json, {
                username: json.username,
                password: '',
                is_active: json.isDeleted,
                first_name: json.first_name,
                last_name: json.last_name,
                middle_name: json.middle_name,
                gender: json.gender,
                email: json.username,
                mobile_number: json.mobile_number,
                verification_status: json.verification_status,
                roles: json.roles
            });
        }
    }

    static reviver(key: string, value: any): any {
        return key === '' ? User.fromJSON(value) : value;
    }

    constructor(
        username: string,
        is_active:  boolean,
        first_name: string,
        last_name: string,
        middle_name: string,
        gender: string,
        mobile_number: string,
        verification_status: string
    ) {
        this.username = username;
        this.is_active = is_active;
        this.first_name = first_name;
        this.last_name = last_name;
        this.middle_name = middle_name;
        this.gender = gender;
        this.email = username;
        this.mobile_number = mobile_number;
        this.verification_status = verification_status;
    }

    toJSON(): UserJSON {
        return Object.assign({}, this, {
            username: this.username,
            password: this.password,
            isDeleted: this.is_active,
            first_name: this.first_name,
            last_name: this.last_name,
            middle_name: this.middle_name,
            gender: this.gender,
            email: this.email,
            mobile_number: this.mobile_number,
            verification_status: this.verification_status,
            roles: this.roles
        });
    }
}
