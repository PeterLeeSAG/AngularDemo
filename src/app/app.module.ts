import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobOrderComponent } from './job-order/job-order.component';
import { YarnOrderComponent } from './yarn-order/yarn-order.component';
import { ComboHeadComponent } from './yarn-order/combo-head/combo-head.component';
import { ComboOrderDetailsComponent } from './yarn-order/combo-order-details/combo-order-details.component';
import { ComboTableComponent } from './yarn-order/combo-table/combo-table.component';
import { OrderHeadComponent } from './yarn-order/order-head/order-head.component';
import { OrderTableComponent } from './yarn-order/order-table/order-table.component';
import { WeightControlComponent } from './yarn-order/weight-control/weight-control.component';
import { WeightInfoComponent } from './yarn-order/weight-info/weight-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MainNavComponent,
    JobOrderComponent,
    YarnOrderComponent,
    ComboHeadComponent,
    ComboOrderDetailsComponent,
    ComboTableComponent,
    OrderHeadComponent,
    OrderTableComponent,
    WeightControlComponent,
    WeightInfoComponent
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
    MatRadioModule,
    LayoutModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
