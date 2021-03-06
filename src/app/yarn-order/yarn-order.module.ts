import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

//Featured modules
import { YarnOrderRoutingModule } from './yarn-order-routing.module'
import { SharedModule } from '../share/shared.module'

import { LayoutModule } from '@angular/cdk/layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YarnOrderComponent } from './yarn-order.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { ComboHeadComponent } from './combo-head/combo-head.component';
import { ComboOrderDetailsComponent } from './combo-order-details/combo-order-details.component';
import { ComboTableComponent } from './combo-table/combo-table.component';
import { OrderHeadComponent } from './order-head/order-head.component';
import { OrderTableComponent } from './order-table/order-table.component';
import { WeightControlComponent } from './weight-control/weight-control.component';
import { WeightInfoComponent } from './weight-info/weight-info.component';
import { ComboTopComponent } from './combo-top/combo-top.component';
import { SizeListComponent } from './size-list/size-list.component';
import { SizeItemComponent } from './size-item/size-item.component';
import { WeightListComponent } from './weight-list/weight-list.component';
import { WeightItemComponent } from './weight-item/weight-item.component';
import { MaterialItemComponent } from './material-yarn-item/material-yarn-item.component';
import { MaterialListComponent } from './material-yarn-list/material-yarn-list.component';
import { StyleHeadComponent } from './style-head/style-head.component';
import { AutocompleteMaterialDropdownComponent } from './autocomplete-material-dropdown/autocomplete-material-dropdown.component';
import { AutocompleteSupplierDropdownComponent } from './autocomplete-supplier-dropdown/autocomplete-supplier-dropdown.component';
import { AutocompleteArticleDropdownComponent } from './autocomplete-article-dropdown/autocomplete-article-dropdown.component';
import { ComboOrderMatrixComponent } from './combo-order-matrix/combo-order-matrix.component';
import { StyleItemComponent } from './style-item/style-item.component';
import { StyleListComponent } from './style-list/style-list.component';

//Reducers
import { StoreModule } from '@ngrx/store'; 
import { StyleListReducer } from '../reducers/style-list-reducer';
import { SizeListReducer } from '../reducers/size-list-reducer';
import { MatCalReducer } from '../reducers/mat-cal-reducer';
import { MatYarnListReducer } from '../reducers/mat-yarn-list-reducer';
import { WeightListReducer } from '../reducers/weight-control-reducer';

//Services
import { MaterialService } from '../services/material.service';
import { SupplierService } from '../services/supplier.service';
import { ArticleService } from '../services/article.service';

//Angular module Decorator
@NgModule({
  declarations: [
    YarnOrderComponent,
    ComboHeadComponent,
    ComboOrderDetailsComponent,
    ComboTableComponent,
    OrderHeadComponent,
    OrderTableComponent,
    WeightControlComponent,
    WeightInfoComponent,
    ComboTopComponent,
    SizeListComponent,
    SizeItemComponent,
    WeightListComponent,
    WeightItemComponent,
    MaterialItemComponent,
    MaterialListComponent,
    StyleHeadComponent,
    AutocompleteMaterialDropdownComponent,
    AutocompleteSupplierDropdownComponent,
    AutocompleteArticleDropdownComponent,
    ComboOrderMatrixComponent,
    StyleItemComponent,
    BasicInfoComponent,
    StyleListComponent,
  ],
  imports: [
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
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    YarnOrderRoutingModule,
    SharedModule,
    StoreModule.forFeature('styleItems', StyleListReducer),
    StoreModule.forFeature('sizeItems', SizeListReducer),
    StoreModule.forFeature('matCalType', MatCalReducer),
    StoreModule.forFeature('materialYarns', MatYarnListReducer),
    ],
  providers: [
    MaterialService,
    SupplierService,
    ArticleService,
  ],
  exports: [
    YarnOrderComponent
  ]
})
export class YarnOrderModule {
}
