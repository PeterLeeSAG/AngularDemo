import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { JobOrderComponent } from './job-order/job-order.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'jobOrder', component: JobOrderComponent },
  /*Lazy Loading for the following modules*/
  { 
    path: 'yarnOrder', 
    loadChildren: () => 
      import('./yarn-order/yarn-order.module').then(m => m.YarnOrderModule) 
  },
  { 
    path: 'auth', 
    loadChildren: () => 
      import('./auth/auth.module').then(m => m.AuthModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
