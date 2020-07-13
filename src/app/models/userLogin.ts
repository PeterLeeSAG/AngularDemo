//User Login model in \SAG.Authentication\Models\UserLogin.cs
export interface UserLogin {
    sID: string;
    sGUID: string;
    uID: string;
    loginID: string;
    companyGuid: string | null;
    level: number | null;
    engName: string;
    chiName: string;
    deptID: number | null;
    email: string;
    location: number | null;
    applicationName: string;
    logTime: string;
    retired: boolean;
}