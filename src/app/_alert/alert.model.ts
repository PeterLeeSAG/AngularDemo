import { NumberValueAccessor } from '@angular/forms';

export class Alert {
    id: string;
    type: AlertType;
    message: string;
    autoClose: boolean;
    keepAfterRouteChange: boolean;
    fade: boolean;
    showSeconds: number = 10; //default value
    topPadding: number = 65; //default value

    constructor(init?:Partial<Alert>) {
        Object.assign(this, init);
    }
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}