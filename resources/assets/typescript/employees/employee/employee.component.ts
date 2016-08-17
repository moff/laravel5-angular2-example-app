import { Component, OnInit, OnDestroy } from "@angular/core";
import { EmployeeService } from '../shared/employee.service';
import { IEmployee } from '../shared/employee.interface';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    template: require('./employee.component.html')
})
export class EmployeeComponent implements OnInit, OnDestroy {
    
    private _sub: Subscription;
    
    employee: IEmployee = <IEmployee>{};
    errorMessage: string;
    
    constructor(private _employeeService: EmployeeService,
                private _route: ActivatedRoute,
                private _router: Router) {}
    
    ngOnInit(): void {
        this._sub = this._route.params.subscribe(params => {
            let id = +params['id'];
            this._employeeService.getEmployee(id)
                .subscribe(
                    employee => this.employee = employee,
                    error => this.errorMessage = <any>error
                );
        });
    }
    
    ngOnDestroy(): void {
        this._sub.unsubscribe();
    }
    
    saveEmployee() {
        this._employeeService.updateEmployee(this.employee)
            .subscribe(
                employee => {
                    this.employee = employee;
                    this._router.navigate(['/employees']);
                },
                error => {
                    this.errorMessage = <any>error;
                    console.error('employee is not saved')
                }
            );
    }
}
