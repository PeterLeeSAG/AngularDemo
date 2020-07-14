export class MenuItem {
    public id: number; //Could be GUID in production server
    public displayName: string;
    public path: string;
    public level: number;
    public subMenu: MenuItem[];

    constructor(name: string, path: string)
    {
        this.displayName = name;
        this.path = path;
    }
}