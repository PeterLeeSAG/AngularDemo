import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertModule } from '../_alert';
import { ScrollTrackerDirective } from './scroll-tracker.directive';

@NgModule({
    declarations:[
        AlertModule,
        ScrollTrackerDirective
    ],
    imports:[
        CommonModule
    ],
    exports:[
        AlertModule,
        CommonModule,
        FormsModule
    ]
})
export class SharedModule {}