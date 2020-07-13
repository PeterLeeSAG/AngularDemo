export interface UserAccessRight {
    moduleID: string;
    moduleSecuritykey: string; //GUID in system
    moduleName: string;
    moduleType: ModuleType;
    path: string; 
    grantedActions: ModuleActionType[];
    subSystemModules: UserAccessRight[];
}

enum ModuleType {
    Root = 0,
    Department = 1,
    SectionHeader = 2,
    Module = 3,
    SubSystem = 4, //A sub system with its login mechanism / user profile, login with SSO system
    ExternalSubSystem = 5 //A sub system with its own login mechanism, login with its own login page
}

//Basic actions for the module
enum ModuleActionType {
    Browse = 0,
    View = 1,
    Create = 2,
    Modify = 3,
    Delete = 4,
    Confirm = 5,
    CopyAs = 6,
    UnDelete = 7
}