import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';


import { TableauxComponent } from './chart_pg2/tableaux/tableaux.component';


const routes: Routes = [
  {
    'path': '',
    'redirectTo': 'dashboard',
    'pathMatch': 'full',
  }, {
    'path': '',
    'component': AdminLayoutComponent,
    'children': [
      {
        'path': '',
        loadChildren: () => import('src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  },{
  'path':'TableauxComponent',
  'component': TableauxComponent
}];

@NgModule({
  imports: [ CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
