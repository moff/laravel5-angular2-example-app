import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeService } from './employees/shared/employee.service';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

import { LaddaModule } from 'angular2-ladda';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        LaddaModule,
        FlashMessagesModule
    ],
    providers: [
        appRoutingProviders,
        EmployeeService
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        EmployeeListComponent,
        EmployeeComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
