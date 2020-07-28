import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YarnOrderComponent } from './yarn-order.component';

const routes: Routes = [
  { path: '', 
    component: YarnOrderComponent,
    /*
    children:[
      {path: 'new', component: YarnOrderEditComponent}
      {path: ':id', component: YarnOrderDetailComponent}
    ]
    */
   },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YarnOrderRoutingModule { }
