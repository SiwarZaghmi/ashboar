import { BrowserModule } from '@angular/platform-browser';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetDataService } from './services/get-data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from './components/components.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TableComponent } from './charts_tables/table/table.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ColumnChartComponent } from './charts_tables/column-chart/column-chart.component';
import { CardsComponent } from './charts_tables/cards/cards.component';
import { ActionTypePieComponent } from './charts_tables/action-type-pie/action-type-pie.component';
import { StateComponent } from './charts_tables/state/state.component';
import { TablesComponent } from './pages/tables/tables.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DashboardComponent,
    TableComponent,
    ColumnChartComponent,
    CardsComponent,
    ActionTypePieComponent,
    StateComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    NgbModule,
    ComponentsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    
    
    
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
