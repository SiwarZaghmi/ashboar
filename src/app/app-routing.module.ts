import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';


import { TableauxComponent } from './chart_pg2/tableaux/tableaux.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './authentification/auth.guard';
import { Chart2Component } from './chart_pg2/chart2/chart2.component';
import { CardsComponent } from './charts_pg1/cards/cards.component';
import { EpicTable1Component } from './pages/resource-planning/charts/epic-table1/epic-table1.component';
import { StackedColumnsComponent } from './pages/resource-planning/stacked-columns/stacked-columns.component';
import { Table2Component } from './pages/resource-planning/table2/table2.component';
import { ActionTypePieComponent } from './charts_pg1/action-type-pie/action-type-pie.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: "ActionTypePieComponent",
    component: ActionTypePieComponent

  },
  {
    'path': '',
    'redirectTo': 'dashboard',
    'pathMatch': 'full',
  }, {
    'path': '',
     canActivate: [AuthGuard],
    'component': AdminLayoutComponent,
    'children': [
      {
        'path': '',
        loadChildren: () => import('src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  }
  ];

@NgModule({
  imports: [ CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
