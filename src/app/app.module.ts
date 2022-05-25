import { BrowserModule } from '@angular/platform-browser';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetDataService } from './services/get-data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from './components/components.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TableComponent } from './charts_pg1/table/table.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ColumnChartComponent } from './charts_pg1/column-chart/column-chart.component';
import { CardsComponent } from './charts_pg1/cards/cards.component';
import { ActionTypePieComponent } from './charts_pg1/action-type-pie/action-type-pie.component';
import { StateComponent } from './charts_pg1/state/state.component';
import { TablesComponent } from './pages/tables/tables.component';
import { PiechartComponent } from './chart_pg2/piechart/piechart.component';
import { Chart1Component } from './chart_pg2/chart1/chart1.component';
import { Chart2Component } from './chart_pg2/chart2/chart2.component';
import { CARDComponent } from './chart_pg2/card/card.component';
import { TableauxComponent } from './chart_pg2/tableaux/tableaux.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './authentification/auth.service';
import { AuthGuard } from './authentification/auth.guard';
import { TokenInterceptorService } from './authentification/token-interceptor.service';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { ResourcePlanningComponent } from './pages/resource-planning/resource-planning.component';
import { EpicTable1Component } from './pages/resource-planning/charts/epic-table1/epic-table1.component';
import { CardProgressComponent } from './pages/resource-planning/card-progress/card-progress.component';
import { StackedColumnsComponent } from './pages/resource-planning/stacked-columns/stacked-columns.component';
import { Table2Component } from './pages/resource-planning/table2/table2.component';
import { TableepicComponent } from './charts_pg1/tableepic/tableepic.component';

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
    TablesComponent,
    PiechartComponent,
    Chart1Component,
    Chart2Component,
    CARDComponent,
    TableauxComponent,
    LoginComponent,
    ResourcePlanningComponent,
    EpicTable1Component,
    CardProgressComponent,
    StackedColumnsComponent,
    Table2Component,
    TableepicComponent,
   
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
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({showForeground :true,})
  

    
    
    
  ],
  providers: [AuthService, AuthGuard,GetDataService ,  
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],

  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
