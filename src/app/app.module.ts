import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

//Angular material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';

import { StoreModule } from '@ngrx/store'; 
import { StyleListReducer } from './reducers/style-list-reducer';
import { SizeListReducer } from './reducers/size-list-reducer';
import { MatCalReducer } from './reducers/mat-cal-reducer';
import { MatYarnListReducer } from './reducers/mat-yarn-list-reducer';
import { WeightListReducer } from './reducers/weight-control-reducer';

import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobOrderComponent } from './job-order/job-order.component';

//Featured Modules
import { AppRoutingModule } from './app-routing.module';
import { AlertModule } from './_alert';
import { YarnOrderModule } from "./yarn-order/yarn-order.module"

//Services
import { MenuService } from './services/menu.services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MainNavComponent,
    JobOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatMenuModule,
    LayoutModule,
    NgbModule,
    MatNativeDateModule,
    AlertModule,
    YarnOrderModule,
    StoreModule.forRoot({
      styleItems: StyleListReducer,
      sizeItems: SizeListReducer,
      matCalType: MatCalReducer,
      materialYarns: MatYarnListReducer,
      }),
    ],
  providers: [
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }