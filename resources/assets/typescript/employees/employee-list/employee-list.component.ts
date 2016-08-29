import { Component, OnInit, DoCheck } from "@angular/core";
import { EmployeeService } from '../shared/employee.service';
import { IEmployee } from '../shared/employee.interface';
import { Subscription } from 'rxjs/Subscription';
import { LoadersCssComponent } from 'angular2-loaders-css';

@Component({
    template: require('./employee-list.component.html'),
    directives: [LoadersCssComponent]
})
export class EmployeeListComponent implements OnInit, DoCheck {
    
    private _sub: Subscription;
    
    employees: IEmployee[] = [];
    errorMessage: string;
    loading: boolean = true;
    
    constructor(private _employeeService: EmployeeService) {}
    
    ngOnInit(): void {
        this._sub = this._employeeService.getEmployees()
            .subscribe(
                employees => { 
                    setTimeout(() => {
                        this.employees = employees; 
                    }, 1500);
                },
                error => this.errorMessage = <any>error);
    }
    
    clickMe(): void {
        console.log(this.employees);
    }
    
    ngDoCheck(): void {
        if (this.employees.length) {
            this.loading = false;
        }
    }
    
    ngOnDestroy(): void {
        this._sub.unsubscribe();
    }
}
