import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
