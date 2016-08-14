import { Component, OnInit } from "@angular/core";
import { EmployeeService } from '../shared/employee.service';
import { IEmployee } from '../shared/employee.interface';
import { Subscription } from 'rxjs/Subscription';

@Component({
    template: require('./employee-list.component.html')
})
export class EmployeeListComponent implements OnInit {
    
    private _sub: Subscription;
    
    employees: IEmployee[];
    errorMessage: string;
    
    constructor(private _employeeService: EmployeeService) {}
    
    ngOnInit(): void {
        this._sub = this._employeeService.getEmployees()
            .subscribe(
                employees => this.employees = employees,
                error => this.errorMessage = <any>error);
    }
    
    clickMe(): void {
        console.log(this.employees);
    }
    
    ngOnDestroy(): void {
        this._sub.unsubscribe();
    }
}
