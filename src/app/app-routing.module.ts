import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { TableComponent } from './charts_tables/table/table.component';
import { CardsComponent } from './charts_tables/cards/cards.component';
import { StateComponent } from 'src/app/charts_tables/state/state.component';


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
  'path':'CardsComponent',
  'component': TableComponent
}];

@NgModule({
  imports: [ CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
