import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertModule } from '../_alert';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ScrollTrackerDirective } from './scroll-tracker.directive';

@NgModule({
    declarations:[
        ScrollTrackerDirective,
        LoadingSpinnerComponent,
    ],
    imports:[
        CommonModule
    ],
    exports:[
        AlertModule,
        CommonModule,
        FormsModule,
        LoadingSpinnerComponent
    ]
})
export class SharedModule {}