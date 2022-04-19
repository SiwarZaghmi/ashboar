import { Routes } from '@angular/router';

import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { TablesComponent } from 'src/app/pages/tables/tables.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'tables',         component: TablesComponent },
];
