export interface RoleJSON {
    _id?: string;
    rolename: string;
    description: string;
    isActive: boolean;
    permissions: string[];
}
